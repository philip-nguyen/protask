import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const DraggableListItem = props => {

    const itemRef = useRef(null);

    const onDragStart = (e) => {
        // remove default drag ghost
        e.dataTransfer.effectedAllowed = 'move';
        e.dataTransfer.setDragImage(e.target, 50000, 50000);

        // custom drag ghost
        let ghostNode = e.target.cloneNode(true);

        ghostNode.style.position = "absolute";
        // show ghost at mouse mosition
        ghostNode.style.top = (e.pageY - e.target.offsetHeight/2) + 'px';
        ghostNode.style.left = (e.pageX - e.target.offsetWidth/2) + 'px';

        // add width height to ghost node
        ghostNode.style.height = e.target.offsetHeight + 'px';
        ghostNode.style.width = e.target.offsetWidth + 'px';

        // add some style
        ghostNode.style.opacity = '0.8';
        ghostNode.style.pointerEvent = 'none'

        ghostNode.id = 'ghostNode';

        document.body.prepend(ghostNode);

        // identify selected item
        itemRef.current.classList.add('dragstart');
    }

    // event when draggin
    const onDrag = (e) => {
        // move ghost node with mouse
        let ghostNode = document.querySelector('#ghostNode');
        ghostNode.style.top = (e.pageY - e.target.offsetHeight/2) + 'px';
        ghostNode.style.left = (e.pageX - e.target.offsetWidth/2) + 'px';
    }

    return (
        <li 
            ref={itemRef}
            className="draggable-list__item"
            draggable="true"
            onDragStart={onDragStart}
            onDrag={onDrag}
            >
            {props.children}
        </li>
    )
}

DraggableListItem.propTypes = {
    
}

export default DraggableListItem;