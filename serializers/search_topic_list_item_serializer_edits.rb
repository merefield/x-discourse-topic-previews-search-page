
module SearchTopicListItemSerializerAddon
  def include_thumbnails?
    true
  end
end

class SearchTopicListItemSerializer
  if SiteSetting.search_previews_enabled
    prepend SearchTopicListItemSerializerAddon
  end
end
