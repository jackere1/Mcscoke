const Comps = {
    Component: class {
        constructor(props, cls) {
            this.props = props;
            this.state = [];
            this.classes=cls
        }
    },

    CreateElement(type, props) {
        let elem = document.createElement(type);

        for (const key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                const attr = document.createAttribute(key);
                attr.value = props[key];
                elem.setAttributeNode(attr);
            }
        }

        elem.innerText = props["text"];
        return elem;
    }
}

export default Comps;
