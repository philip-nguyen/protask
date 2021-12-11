import React, {useState} from 'react'
import PropTypes from 'prop-types'

// css
import './draggable-list.css';

import DraggableListItem from './DraggableListItem'

const DraggableList = ({list, renderItemContent}) => {
    const [tasks, setTasks] = useState(list);

    return (
        <ul className="draggable-list">
            { tasks.map((item, index) => (
                <DraggableListItem key={index}>
                    {
                        renderItemContent(item)
                    }
                </DraggableListItem>
            ))}
            {/* add last item so you can drag item to last position */}
            <DraggableListItem
                key={list.length}
                draggable={false}
            />
        </ul>
    )
}

DraggableList.propTypes = {
    list: PropTypes.array,
    renderItemContent: PropTypes.func
}

export default DraggableList;