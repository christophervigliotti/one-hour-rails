const { test, expect } = require("@playwright/test");

// KEEP_OPEN=1 pauses after each test so the browser stays open until you click Resume in the Playwright inspector.
test.afterEach(async ({ page }) => {
  if (process.env.KEEP_OPEN) await page.pause();
});

// Titles and bodies must be unique (Article validates both), so each test gets its own.
function uniqueSuffix() {
  return `${Date.now()} ${Math.random().toString(36).slice(2, 7)}`;
}

function uniqueTitle(label) {
  return `E2E ${label} ${uniqueSuffix()}`;
}

function uniqueBody() {
  return `E2E body ${uniqueSuffix()} This is long enough to pass the body length validation.`;
}

// Clicks a form button and waits for the POST to finish, so the save is committed
// before the test navigates somewhere else.
async function submitForm(page, buttonName) {
  await Promise.all([
    page.waitForResponse((res) => res.request().method() === "POST" || res.request().method() === "PATCH"),
    page.getByRole("button", { name: buttonName }).click(),
  ]);
}

async function createArticle(page, { title, body = uniqueBody(), published = false }) {
  await page.goto("/articles/new");
  await page.getByLabel("Title").fill(title);
  await page.getByLabel("Body").fill(body);
  if (published) await page.getByLabel("Published").check();
  await submitForm(page, "Create Article");
}

test("index lists articles and links to new", async ({ page }) => {
  const title = uniqueTitle("index");
  await createArticle(page, { title });

  await page.goto("/articles");
  await expect(page.getByRole("heading", { name: "Articles" })).toBeVisible();
  await expect(page.getByText(title)).toBeVisible();
  await expect(page.getByRole("link", { name: "New Article" })).toBeVisible();
});

test("create article with valid data saves and shows it", async ({ page }) => {
  const title = uniqueTitle("create");
  await createArticle(page, { title, published: true });

  await expect(page).toHaveURL(/\/articles\/\d+$/);
  await expect(page.getByRole("heading", { name: title })).toBeVisible();
  await expect(page.getByText("Published: Yes")).toBeVisible();
});

test("create article with invalid data shows errors and does not save", async ({ page }) => {
  await createArticle(page, { title: "", body: "Too short" });

  await expect(page.getByRole("heading", { name: "New Article" })).toBeVisible();
  await expect(page.locator("#error_explanation")).toContainText("prohibited this article from being saved");
  await expect(page.locator("#error_explanation")).toContainText("Title");
});

test("edit and update article with valid data", async ({ page }) => {
  const original = uniqueTitle("before");
  const updated = uniqueTitle("after");
  await createArticle(page, { title: original });

  await page.goto("/articles");
  await page.locator("li", { hasText: original }).getByRole("link", { name: "Edit this Article" }).click();
  await expect(page.getByRole("heading", { name: "Edit Article" })).toBeVisible();

  await page.getByLabel("Title").fill(updated);
  await page.getByLabel("Published").check();
  await submitForm(page, "Update Article");

  await expect(page.getByRole("heading", { name: updated })).toBeVisible();
  await expect(page.getByText("Published: Yes")).toBeVisible();
});

test("update article with invalid data shows errors and keeps the old title", async ({ page }) => {
  const title = uniqueTitle("keep");
  await createArticle(page, { title });

  await page.goto("/articles");
  await page.locator("li", { hasText: title }).getByRole("link", { name: "Edit this Article" }).click();

  await page.getByLabel("Title").fill("");
  await submitForm(page, "Update Article");

  await expect(page.getByRole("heading", { name: "Edit Article" })).toBeVisible();
  await expect(page.locator("#error_explanation")).toContainText("prohibited this article from being saved");

  await page.goto("/articles");
  await expect(page.getByText(title)).toBeVisible();
});
