import React from "react";

import styles from "./timeline.module.css";

import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { PageContext } from "../Context";
import SchoolIcon from "./school";

function Timeline() {
    let schoolIconStyles = { background: "#f9c74f" };

    const [, setPage] = React.useContext(PageContext);

    return (
        <div>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={schoolIconStyles}
                            icon={<SchoolIcon />}
                        >
                            <h3
                                className={
                                    ("vertical-timeline-element-title",
                                    styles.title)
                                }
                            >
                                {element.title}
                            </h3>
                            <p className={styles.description}>
                                {element.description}
                            </p>
                            <div
                                className={styles.buttontimeline}
                                onClick={() => setPage(element.id)}
                            >
                                View Summary
                            </div>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;