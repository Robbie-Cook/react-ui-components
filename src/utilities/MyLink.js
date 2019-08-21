/**
 * Represents a link to a page
 */
class MyLink {
  constructor(name, path, component, exact = false) {
    this.name = name;
    this.path = path;
    this.exact = exact; // whether or not the path has to be exact
  }

  /**
   * Determines whether a link is active
   * @returns true if so, otherwise false
   */
  isActive() {
    return ('/' + global.document.URL.split('/')[3]) === this.path;
  }
}
export default MyLink;
