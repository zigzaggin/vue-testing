import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // The relative path of the components folder
    __dirname,
    // Whether or not to look in subfolders
    false,
    // The regular expression used to match base component filenames
    /\w+\.(vue|js)$/
)

let files = {};

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Strip the leading `./` and extension from the filename
            fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )

    // Register component globally
    let constructor = componentConfig.default || componentConfig;
    files[componentName] = constructor;
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        constructor
    )
})

export default files