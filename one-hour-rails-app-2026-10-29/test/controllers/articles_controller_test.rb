require "test_helper"

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get articles_url
    assert_response :success
  end

  test "should get show" do
    get article_url(articles(:one))
    assert_response :success
  end

  test "should get new" do
    get new_article_url
    assert_response :success
  end

  test "should get create" do
    post articles_url, params: { article: { title: "Test Title", body: "Test Body", published: true } }
    assert_response :redirect
  end
end
