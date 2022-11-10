import hyphenateWords from "./hyphenateWords.js"
import { projects } from "../data/projects.js"

const findProject = str => {
  const project = projects.filter(({title}) => {
    return hyphenateWords(title) === str
  })
  return project[0]
}

export default findProject