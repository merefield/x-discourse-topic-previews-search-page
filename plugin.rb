# name: x-discourse-topic-previews-search-page
# about: Adds thumbnail previews and gallery styling to the full page search page.
# version: 1.1
# contact emails: robert@thepavilion.io
# authors: Robert Barrow
# url: https://github.com/merefield/x-discourse-topic-previews-seach-page

register_asset 'stylesheets/search_previews_common.scss'

enabled_site_setting :search_previews_enabled

after_initialize do
  load File.expand_path('../serializers/search_topic_list_item_serializer_edits.rb', __FILE__)
end
