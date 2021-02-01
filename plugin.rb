register_asset 'stylesheets/search_previews_common.scss'
register_asset 'stylesheets/search_previews_mobile.scss'
# register_asset 'javascripts/discourse/lib/masonry/masonry.js'
# register_asset 'javascripts/discourse/lib/imagesloaded/imagesloaded.js'

enabled_site_setting :search_previews_enabled

after_initialize do
  load File.expand_path('../serializers/search_topic_list_item_serializer_edits.rb', __FILE__)
end