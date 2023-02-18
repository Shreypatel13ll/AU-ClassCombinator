import React from "react";
import { Course } from "./../Course_Directory";
import "./../styles/courseItem.css";
export default function CourseItem(props: {
	course: Course;
	selected: string[];
	setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	return (
		<div
			onClick={() => {
				if (props.selected.includes(props.course.Code)) {
					props.setSelected(
						props.selected.filter(
							(code) => code !== props.course.Code
						)
					);
				} else {
					props.setSelected([...props.selected, props.course.Code]);
				}
			}}
			className={`course-item  ${
				props.selected.includes(props.course.Code) ? "selected" : ""
			} `}
		>
			<div className="field-wrapper">
				<span className="key">
					<strong>Code: </strong>
				</span>
				<span className="value">{props.course.Code}</span>
			</div>
			<div className="field-wrapper">
				<span className="key">
					<strong>Name: </strong>
				</span>
				<span className="value">{props.course.Name}</span>
			</div>
			<div className="field-wrapper">
				<span className="key">
					<strong>Credits: </strong>
				</span>
				<span className="value">{props.course.Credits}</span>
			</div>
			{props.course.Prerequisite ? (
				<div className="field-wrapper">
					<span className="key">
						<strong>Prerequisites: </strong>
					</span>
					<span className="value">{props.course.Prerequisite}</span>
				</div>
			) : null}
			<div className="field-wrapper">
				<span className="key">
					<strong>Faculties: </strong>
				</span>
				<span className="value">
					{props.course.Faculties.join(", ")}
				</span>
			</div>
			{!props.course.Description.includes("None") ? (
				<div className="field-wrapper">
					<span className="key">
						<strong>Description: </strong>
					</span>
					<span className="value">{props.course.Description}</span>
				</div>
			) : null}
			<div className="field-wrapper">
				<span className="key">
					<strong>Semester: </strong>
				</span>
				<span className="value">{props.course.Semester}</span>
			</div>
		</div>
	);
}
