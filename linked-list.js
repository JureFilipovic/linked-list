export default function LinkedList () {
    let firstNode = null;

    const append = (value) => {
        const newNode = node(value, null);
        
        if (firstNode === null) {
            firstNode = newNode;
            return;
        }

        const tailNode = tail();
        tailNode.nextNode = newNode;        
    }

    const prepend = (value) => {
        const newNode = node(value, firstNode);
        firstNode = newNode;
    }

    const size = () => {
        let node = firstNode;
        let size = 0;
        while (node !== null) {
            size += 1;
            node = node.nextNode;
        }
        return size;
    }

    const head = () => {
        return firstNode;
    }

    const tail = () => {
        let node = firstNode;
        while (node.nextNode !== null) {
            node = node.nextNode;
        }

        return node;
    }

    const at = (index) => {
        let node = firstNode;
        let i = 0;
        while (node != null) {
            if (i === index) return node;
            node = node.nextNode;
            i++;
        }
        return null; // index out of range
    }

    const pop = () => {
        if (firstNode === null || firstNode.nextNode === null) {
            firstNode = null;
        } else {
            let node = firstNode;
            while (node.nextNode.nextNode !== null) {
                node = node.nextNode;
            }
            node.nextNode = null;
        }
    }

    const contains = (value) => {
        let node = firstNode;
        while (node !== null) {
            if (node.value === value) return true;
            node = node.nextNode;
        }
        return false;
    }

    const insertAt = (value, index) => {
        if (index === 0) {
            prepend(value);
            return;
        }

        const prevNode = at(index - 1);
        if (prevNode === null) return; // index out of bounds

        const newNode = node(value, prevNode.nextNode);
        prevNode.nextNode = newNode;
    }

    const removeAt = (index) => {
        if (index === 0) {
            if (firstNode !== null) {
                firstNode = firstNode.nextNode;
            }
            return;
        }
        let beforeNode = at(index - 1);
        let toRemoveNod = at(index);

        if (beforeNode === null || toRemoveNod === null) return; //index out of bounds

        beforeNode.nextNode = toRemoveNod.nextNode;
    }

    const toString = () => {
        let string = "";
        if (firstNode === null) return "null";
        let node = firstNode;
        while (node.nextNode !== null) {
            string += `( ${node.value} ) -> `;
            node = node.nextNode;
        }
        string += `( ${node.value} ) -> null`
        return string;
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        insertAt,
        removeAt,
        toString,
    }
}

function node (value = null, nextNode = null) {
    return {
        value,
        nextNode,
    }
}