import { renderUnboundPreview } from "discourse/plugins/discourse-topic-list-previews/discourse/lib/utilities";
import discourseComputed, {
  on,
  observes,
} from "discourse-common/utils/decorators";
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "search-previews-init",
  initialize(container, app) {
    withPluginApi("0.8.12", (api) => {
      api.modifyClass("component:search-result-entry", {
        @discourseComputed
        thumbnailOpts() {
          let opts = { tilesStyle: true };

          opts["thumbnailWidth"] = "100";

          return opts;
        },
      });
    });
  },
};
