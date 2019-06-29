import { load, addParameters } from "@storybook/react"
import { themes } from "@storybook/theming"
import { name, version } from "../package.json"

addParameters({
  options: {
    name: `${name} v${version}`,
    theme: themes.light,
    showPanel: false,
    sidebarAnimations: false,
    isToolshown: true,
    storySort: (story, otherStory) => {
      const compare = (string, otherString) =>
        string.localeCompare(otherString, undefined, { caseFirst: "upper" })
      return compare(story[1].id, otherStory[1].id)
    },
  },
})

load(require.context("../packages", true, /\.story\.js$/), module)
load(require.context("../packages", true, /\.story\.mdx$/), module)
