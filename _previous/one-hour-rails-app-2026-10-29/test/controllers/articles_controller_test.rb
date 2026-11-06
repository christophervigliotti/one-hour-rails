require "test_helper"

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  VALID_BODY = "This is a sufficiently long body for the article validation to accept it."

  test "should get index" do
    get articles_url
    assert_response :success
    assert_match articles(:one).title, response.body
    assert_match articles(:two).title, response.body
  end

  test "should get show" do
    get article_url(articles(:one))
    assert_response :success
    assert_select "h1", articles(:one).title
  end

  test "should get new" do
    get new_article_url
    assert_response :success
    assert_select "form"
  end

  test "should create article with valid data" do
    assert_difference("Article.count", 1) do
      post articles_url, params: { article: { title: "A Brand New Article", body: VALID_BODY, published: true } }
    end

    article = Article.find_by!(title: "A Brand New Article")
    assert_redirected_to article_url(article)
    assert article.published
  end

  test "should not create article with invalid data" do
    assert_no_difference("Article.count") do
      post articles_url, params: { article: { title: "", body: "Too short", published: false } }
    end

    assert_response :unprocessable_content
    assert_select "#error_explanation"
  end

  test "should get edit" do
    get edit_article_url(articles(:one))
    assert_response :success
    assert_select "form"
  end

  test "should update article with valid data" do
    article = articles(:one)
    patch article_url(article), params: { article: { title: "An Updated Fixture Title", published: true } }

    assert_redirected_to article_url(article)
    article.reload
    assert_equal "An Updated Fixture Title", article.title
    assert article.published
  end

  test "should not update article with invalid data" do
    article = articles(:one)
    patch article_url(article), params: { article: { title: "", body: "Too short" } }

    assert_response :unprocessable_content
    assert_select "#error_explanation"
    assert_equal "First Fixture Article", article.reload.title
  end
end
