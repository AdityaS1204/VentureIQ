import React from 'react'
import {marked} from 'marked'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const MarkDwTemp = ({markedContent}) => {
  console.log(markedContent)
const htmlmarked = marked(markedContent);
console.log(htmlmarked);
  return (

    <div className="prose prose-lg">
<ReactMarkdown remarkPlugins={[remarkGfm]}>{markedContent}</ReactMarkdown>
    </div>
  )
};






// add the required style to table and headings. add style using css.

// ----------------------------------------------------------------------------------------------

// const htmlresponse = <h2>AI-Driven Recruitment Platform: Business Analysis</h2>
// <p><strong>Business Idea:</strong> An AI-driven recruitment platform that screens candidates, analyzes resumes, assesses cultural fit, and provides employers with a shortlist of suitable applicants.</p>
// <p><strong>1. Market Sector:</strong></p>
// <p>This platform operates within the <strong>Human Resources (HR) Technology</strong> market sector, specifically targeting the <strong>Recruitment Process Outsourcing (RPO)</strong> and <strong>Applicant Tracking System (ATS)</strong> segments.  It also touches upon the growing <strong>AI-powered HR solutions</strong> niche. The target customers are businesses of all sizes, from startups to large enterprises, seeking efficient and effective recruitment solutions.  The platform could be marketed as a cost-saving tool for smaller businesses lacking dedicated HR teams, and as a time-saving tool for larger businesses dealing with high volumes of applicants.</p>
// <p><strong>2. Business Analysis Models:</strong></p>
// <p><strong>2.1 SWOT Analysis:</strong></p>
// <table>
// <thead>
// <tr>
// <th><strong>Strengths</strong></th>
// <th><strong>Weaknesses</strong></th>
// </tr>
// </thead>
// <tbody><tr>
// <td>* <strong>Automation &amp; Efficiency:</strong> Significantly reduces time spent on initial candidate screening.</td>
// <td>* <strong>Algorithm Bias:</strong> Potential for bias in AI algorithms if not carefully designed and monitored.</td>
// </tr>
// <tr>
// <td>* <strong>Improved Candidate Matching:</strong>  More accurate matching of candidates to job requirements based on skills and personality.</td>
// <td>* <strong>High Development Costs:</strong> Requires significant investment in AI development and data acquisition.</td>
// </tr>
// <tr>
// <td>* <strong>Data-Driven Insights:</strong> Provides valuable data and analytics on recruitment processes.</td>
// <td>* <strong>Data Privacy Concerns:</strong>  Needs to comply with strict data privacy regulations (GDPR, CCPA, etc.).</td>
// </tr>
// <tr>
// <td>* <strong>Cost-Effective:</strong> Can reduce overall recruitment costs for businesses.</td>
// <td>* <strong>Integration Challenges:</strong>  May require integration with existing HR systems, which can be complex.</td>
// </tr>
// <tr>
// <td>* <strong>Scalability:</strong> Easily scalable to handle increasing numbers of applicants and employers.</td>
// <td>* <strong>Lack of Human Touch:</strong> May feel impersonal to candidates and employers who prefer human interaction.</td>
// </tr>
// </tbody></table>
// <table>
// <thead>
// <tr>
// <th><strong>Opportunities</strong></th>
// <th><strong>Threats</strong></th>
// </tr>
// </thead>
// <tbody><tr>
// <td>* <strong>Growing Demand for AI in HR:</strong> Increasing adoption of AI-driven solutions in the HR industry.</td>
// <td>* <strong>Competition from Established Players:</strong>  Existing ATS and RPO providers offering similar functionalities.</td>
// </tr>
// <tr>
// <td>* <strong>Expansion into Niche Markets:</strong> Targeting specific industries or job roles with specialized AI models.</td>
// <td>* <strong>Rapid Technological Advancements:</strong>  Need to constantly update and improve the AI algorithms to remain competitive.</td>
// </tr>
// <tr>
// <td>* <strong>Strategic Partnerships:</strong> Collaborating with HR consulting firms or job boards.</td>
// <td>* <strong>Economic Downturn:</strong>  Reduced hiring activity during economic recessions.</td>
// </tr>
// <tr>
// <td>* <strong>Subscription Model Revenue:</strong>  Potential for recurring revenue through subscription-based access.</td>
// <td>* <strong>Security Breaches:</strong>  Risk of data breaches and reputational damage.</td>
// </tr>
// </tbody></table>
// <p><strong>2.2 PESTEL Analysis:</strong></p>
// <table>
// <thead>
// <tr>
// <th><strong>Factor</strong></th>
// <th><strong>Description &amp; Impact on the Business</strong></th>
// </tr>
// </thead>
// <tbody><tr>
// <td><strong>Political:</strong></td>
// <td>Labor laws, data privacy regulations (GDPR, CCPA), immigration policies. Compliance is crucial.  Changes in these regulations can impact operations and require adaptation.</td>
// </tr>
// <tr>
// <td><strong>Economic:</strong></td>
// <td>Economic growth or recession significantly impacts hiring activity.  Unemployment rates influence candidate availability.  Investment in AI development relies on economic stability.</td>
// </tr>
// <tr>
// <td><strong>Social:</strong></td>
// <td>Changing workforce demographics and expectations. Growing demand for AI-driven solutions.  Candidates&#39; preferences for a more personalized experience should be considered.</td>
// </tr>
// <tr>
// <td><strong>Technological:</strong></td>
// <td>Rapid advancements in AI and machine learning.  Continuous investment in R&amp;D is crucial to remain competitive.  Data security is paramount.</td>
// </tr>
// <tr>
// <td><strong>Environmental:</strong></td>
// <td>Not directly impacting the business model, but sustainability considerations might influence recruitment practices and employer choices.</td>
// </tr>
// <tr>
// <td><strong>Legal:</strong></td>
// <td>Data protection laws, intellectual property rights, employment contracts.  Strict adherence is crucial to avoid legal issues.</td>
// </tr>
// </tbody></table>
// <p><strong>2.3 VRIO Framework:</strong></p>
// <table>
// <thead>
// <tr>
// <th><strong>Resource/Capability</strong></th>
// <th><strong>Valuable?</strong></th>
// <th><strong>Rare?</strong></th>
// <th><strong>Inimitable?</strong></th>
// <th><strong>Organized?</strong></th>
// <th><strong>Competitive Implication</strong></th>
// </tr>
// </thead>
// <tbody><tr>
// <td><strong>AI-driven candidate screening algorithm</strong></td>
// <td>Yes (improves efficiency &amp; accuracy)</td>
// <td>Potentially (depends on algorithm sophistication and data)</td>
// <td>Potentially (depends on algorithm complexity and data exclusivity)</td>
// <td>Needs development (requires skilled data scientists and engineers)</td>
// <td>Sustained competitive advantage (if rare and inimitable)</td>
// </tr>
// <tr>
// <td><strong>Large, high-quality dataset of resumes and candidate profiles</strong></td>
// <td>Yes (essential for accurate algorithm training)</td>
// <td>Potentially (depends on data size and uniqueness)</td>
// <td>Potentially (difficult to replicate proprietary datasets)</td>
// <td>Needs development (data acquisition and management systems)</td>
// <td>Sustained competitive advantage (if rare and inimitable)</td>
// </tr>
// <tr>
// <td><strong>Integration with existing HR systems</strong></td>
// <td>Yes (increases user adoption)</td>
// <td>No (many platforms offer integrations)</td>
// <td>No (integration technologies are widely available)</td>
// <td>Needs development (robust API and support team)</td>
// <td>Competitive parity</td>
// </tr>
// <tr>
// <td><strong>User-friendly interface</strong></td>
// <td>Yes (essential for user adoption)</td>
// <td>No (many platforms offer user-friendly interfaces)</td>
// <td>No (user interface design principles are widely understood)</td>
// <td>Needs development (UX/UI designers and iterative testing)</td>
// <td>Competitive parity</td>
// </tr>
// </tbody></table>
// <p><strong>Conclusion:</strong></p>
// <p>The AI-driven recruitment platform has significant potential within a growing market.  However, success depends on overcoming challenges related to algorithm bias, data privacy, high development costs, and competition from established players.  A strong focus on building a robust and unbiased AI algorithm, securing high-quality data, and developing a user-friendly interface will be crucial for achieving a sustained competitive advantage.  Continuous monitoring of the PESTEL factors and effective resource management as outlined in the VRIO analysis will be vital for long-term success.</p>



//----------------------------------------------------------markdown response. for refrence of the raw response check if any change needs to be added to the system prompt.

// markdown response = 
// **Business Idea:** An AI-driven recruitment platform that screens candidates, analyzes resumes, assesses cultural fit, and provides employers with a shortlist of suitable applicants.


// **1. Market Sector:**

// This platform operates within the **Human Resources (HR) Technology** market sector, specifically targeting the **Recruitment Process Outsourcing (RPO)** and **Applicant Tracking System (ATS)** segments.  It also touches upon the growing **AI-powered HR solutions** niche. The target customers are businesses of all sizes, from startups to large enterprises, seeking efficient and effective recruitment solutions.  The platform could be marketed as a cost-saving tool for smaller businesses lacking dedicated HR teams, and as a time-saving tool for larger businesses dealing with high volumes of applicants.


// **2. Business Analysis Models:**

// **2.1 SWOT Analysis:**

// | **Strengths** | **Weaknesses** |
// |---|---|
// | * **Automation & Efficiency:** Significantly reduces time spent on initial candidate screening. | * **Algorithm Bias:** Potential for bias in AI algorithms if not carefully designed and monitored. |
// | * **Improved Candidate Matching:**  More accurate matching of candidates to job requirements based on skills and personality. | * **High Development Costs:** Requires significant investment in AI development and data acquisition. |
// | * **Data-Driven Insights:** Provides valuable data and analytics on recruitment processes. | * **Data Privacy Concerns:**  Needs to comply with strict data privacy regulations (GDPR, CCPA, etc.). |
// | * **Cost-Effective:** Can reduce overall recruitment costs for businesses. | * **Integration Challenges:**  May require integration with existing HR systems, which can be complex. |
// | * **Scalability:** Easily scalable to handle increasing numbers of applicants and employers. | * **Lack of Human Touch:** May feel impersonal to candidates and employers who prefer human interaction. |


// | **Opportunities** | **Threats** |
// |---|---|
// | * **Growing Demand for AI in HR:** Increasing adoption of AI-driven solutions in the HR industry. | * **Competition from Established Players:**  Existing ATS and RPO providers offering similar functionalities. |
// | * **Expansion into Niche Markets:** Targeting specific industries or job roles with specialized AI models. | * **Rapid Technological Advancements:**  Need to constantly update and improve the AI algorithms to remain competitive. |
// | * **Strategic Partnerships:** Collaborating with HR consulting firms or job boards. | * **Economic Downturn:**  Reduced hiring activity during economic recessions. |
// | * **Subscription Model Revenue:**  Potential for recurring revenue through subscription-based access. | * **Security Breaches:**  Risk of data breaches and reputational damage. |



// **2.2 PESTEL Analysis:**

// | **Factor** | **Description & Impact on the Business** |
// |---|---|
// | **Political:** |  Labor laws, data privacy regulations (GDPR, CCPA), immigration policies. Compliance is crucial.  Changes in these regulations can impact operations and require adaptation. |
// | **Economic:** |  Economic growth or recession significantly impacts hiring activity.  Unemployment rates influence candidate availability.  Investment in AI development relies on economic stability. |
// | **Social:** |  Changing workforce demographics and expectations. Growing demand for AI-driven solutions.  Candidates' preferences for a more personalized experience should be considered. |
// | **Technological:** |  Rapid advancements in AI and machine learning.  Continuous investment in R&D is crucial to remain competitive.  Data security is paramount. |
// | **Environmental:** |  Not directly impacting the business model, but sustainability considerations might influence recruitment practices and employer choices. |
// | **Legal:** |  Data protection laws, intellectual property rights, employment contracts.  Strict adherence is crucial to avoid legal issues. |


// **2.3 VRIO Framework:**

// | **Resource/Capability** | **Valuable?** | **Rare?** | **Inimitable?** | **Organized?** | **Competitive Implication** |
// |---|---|---|---|---|---|
// | **AI-driven candidate screening algorithm** | Yes (improves efficiency & accuracy) | Potentially (depends on algorithm sophistication and data) | Potentially (depends on algorithm complexity and data exclusivity) | Needs development (requires skilled data scientists and engineers) | Sustained competitive advantage (if rare and inimitable) |
// | **Large, high-quality dataset of resumes and candidate profiles** | Yes (essential for accurate algorithm training) | Potentially (depends on data size and uniqueness) | Potentially (difficult to replicate proprietary datasets) | Needs development (data acquisition and management systems) | Sustained competitive advantage (if rare and inimitable) |
// | **Integration with existing HR systems** | Yes (increases user adoption) | No (many platforms offer integrations) | No (integration technologies are widely available) | Needs development (robust API and support team) | Competitive parity |
// | **User-friendly interface** | Yes (essential for user adoption) | No (many platforms offer user-friendly interfaces) | No (user interface design principles are widely understood) | Needs development (UX/UI designers and iterative testing) | Competitive parity |


// **Conclusion:**

// The AI-driven recruitment platform has significant potential within a growing market.  However, success depends on overcoming challenges related to algorithm bias, data privacy, high development costs, and competition from established players.  A strong focus on building a robust and unbiased AI algorithm, securing high-quality data, and developing a user-friendly interface will be crucial for achieving a sustained competitive advantage.  Continuous monitoring of the PESTEL factors and effective resource management as outlined in the VRIO analysis will be vital for long-term success.

