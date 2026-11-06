class Article < ApplicationRecord
  validates :title, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 10 }
  validates :body, presence: true, length: { minimum: 50 }, uniqueness: { case_sensitive: true }
end
