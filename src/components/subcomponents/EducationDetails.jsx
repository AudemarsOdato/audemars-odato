
export default function EducationDetails(props) {

        return (
                <section className="education-details">
                        <p><strong>{props.school}</strong></p>
                        <div className="space-between">
                                <p>{props.gradeDetails}</p>
                                <p>{props.date}</p>
                        </div>
                        <p>{props.course}</p>
                        {props.addDetails &&
                                <p>{props.addDetails}</p>
                        }
                        <br />
                </section>
        )
}