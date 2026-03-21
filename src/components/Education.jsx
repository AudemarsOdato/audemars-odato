import EducationDetails from "./subcomponents/EducationDetails"

export default function Education() {

        return (
                <section className="row">
                        <h2>Education</h2>
                        <hr />
                        <EducationDetails 
                                school="STI College"
                                gradeDetails="First-Year College. Cumulative GWA 1.92."
                                date="June 2025"
                                course="Bachelor of Science in Information Technology"
                        />
                        <EducationDetails 
                                school="Dr. Carlos S. Lanting College"
                                gradeDetails="Graduated with honors. GA 94.19%."
                                date="June 2024"
                                course="Accountancy, Business, and Management"
                                addDetails="Handled three research papers and a business plan project, gaining organizational and collaborative
                                abilities."
                        />
                </section>
        )
}