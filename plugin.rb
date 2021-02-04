register_asset 'stylesheets/search_previews_common.scss'

enabled_site_setting :search_previews_enabled

after_initialize do
  load File.expand_path('../serializers/search_topic_list_item_serializer_edits.rb', __FILE__)
end
