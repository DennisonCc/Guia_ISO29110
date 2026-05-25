export interface StandardSection {
  id: string
  title: string
  content: string
  example?: string
}

export interface StandardPart {
  id: string
  partNumber: string
  title: string
  subtitle: string
  description: string
  sections: StandardSection[]
}

export const isoStandards: StandardPart[] = [
  {
    id: "part-1",
    partNumber: "Part 1",
    title: "ISO/IEC TR 29110-1:2016",
    subtitle: "Overview",
    description:
      "Systems and Software Engineering — Lifecycle profiles for Very Small Entities (VSEs) — Part 1: Overview",
    sections: [
      {
        id: "scope",
        title: "1. Scope and Field of Application",
        content: `<p>This part of the ISO/IEC 29110 series establishes the most important concepts required to understand and use the ISO/IEC 29110 series. It presents the characteristics and requirements of a VSE and clarifies the rationale for specific profiles, documents, standards, and VSE guidelines.</p>
        
<p>This part of the ISO/IEC 29110 series also introduces the concepts of process, lifecycle, and standardization, and defines the common organizational terms of the VSE Profile Document Set.</p>

<h4>1.1 Fields of Application</h4>
<p>This part of the ISO/IEC 29110 Standard is applicable to a VSE. A VSE is an organization (company, organization, department, or project) made up of no more than 25 people. The lifecycle processes described in the ISO/IEC 29110 series of Standardization Profiles and Technical Reports are not intended to prevent or discourage their use by organizations larger than a VSE.</p>

<h4>1.2 Target Audience</h4>
<p>This part of the ISO/IEC 29110 series is aimed at both the general public who want to understand the document series and, more specifically, at users of the ISO/IEC 29110 series. It should be read first when initially exploring VSE Profile documents.</p>`,
        example:
          "A software development startup with 15 employees developing a mobile application would be classified as a VSE and could benefit from implementing ISO/IEC 29110 profiles.",
      },
      {
        id: "normative-references",
        title: "2. Normative References",
        content: `<p>The following documents are referenced in the text in such a way that part or all of their content constitutes requirements of this document. For dated references, only the cited edition applies. For undated references, the latest edition of the referenced document applies (including any amendments).</p>
        
<ul>
  <li><strong>ISO/IEC 29110-2-1</strong> — Software engineering — Lifecycle profiles for Very Small Entities (VSEs) — Part 2-1: Framework and taxonomy</li>
</ul>`,
      },
      {
        id: "terms-definitions",
        title: "3. Terms and Definitions",
        content: `<p>For the purposes of this document, the terms and definitions included in ISO/IEC 29110-2-1 apply, in addition to the following:</p>

<dl>
  <dt><strong>Activity</strong></dt>
  <dd>Set of interrelated tasks of a process. <em>[SOURCE: ISO/IEC/IEEE 12207]</em></dd>
  
  <dt><strong>Acquirer</strong></dt>
  <dd>Stakeholder that purchases or procures a product or service from a supplier. Other commonly used terms for an acquirer are buyer, customer, owner, awardee, or internal/organizational sponsor. <em>[SOURCE: ISO/IEC/IEEE 12207]</em></dd>
  
  <dt><strong>Advanced Profile</strong></dt>
  <dd>Profile aimed at VSEs that wish to sustain and grow as an independent competitive system and/or software development business.</dd>
  
  <dt><strong>Agreement</strong></dt>
  <dd>Mutual recognition of the terms and conditions under which a working relationship is carried out. Example: Contract, memorandum of agreement. <em>[SOURCE: ISO/IEC/IEEE 12207]</em></dd>
  
  <dt><strong>Assessment Indicator</strong></dt>
  <dd>Sources of objective evidence used to support the assessor's judgment in qualifying process attributes. Example: Work products, practice, or resource. <em>[SOURCE: ISO/IEC 33001]</em></dd>
  
  <dt><strong>Assessor</strong></dt>
  <dd>Person who participates in the qualification of process attributes. <em>[SOURCE: ISO/IEC 33001]</em></dd>
  
  <dt><strong>Audit</strong></dt>
  <dd>Systematic, independent, and documented process for obtaining records, statements of facts, or other relevant information and evaluating them objectively to determine to what extent the specified requirements are met. <em>[SOURCE: ISO/IEC 17000]</em></dd>
  
  <dt><strong>Baseline</strong></dt>
  <dd>Formally approved version of a configuration item, regardless of medium, formally designated and fixed at a specific time during the lifecycle of the configuration item. <em>[SOURCE: ISO/IEC/IEEE 24765]</em></dd>
  
  <dt><strong>VSE (Very Small Entity)</strong></dt>
  <dd>An enterprise, organization, department, or project of up to 25 people.</dd>
</dl>`,
        example:
          "When a VSE enters into a contract with a client, the client becomes the 'Acquirer' and the VSE becomes the 'Supplier' according to these definitions.",
      },
      {
        id: "symbols-abbreviations",
        title: "4. Symbols and Abbreviated Terms",
        content: `<h4>4.1 Naming, Diagramming, and Definition Conventions</h4>
<p>The standard uses consistent naming conventions throughout the document series to ensure clarity and interoperability between different parts.</p>

<h4>4.2 Abbreviated Terms</h4>
<table>
  <thead>
    <tr>
      <th>Abbreviation</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>IS</td><td>International Standard</td></tr>
    <tr><td>ISO</td><td>International Organization for Standardization</td></tr>
    <tr><td>IEC</td><td>International Electrotechnical Commission</td></tr>
    <tr><td>ITU-T</td><td>International Telecommunications Union - Telecommunication Standardization Sector</td></tr>
    <tr><td>JTC</td><td>Joint Technical Committee</td></tr>
    <tr><td>OECD</td><td>Organisation for Economic Co-operation and Development</td></tr>
    <tr><td>SME</td><td>Small and Medium Enterprise</td></tr>
    <tr><td>TR</td><td>Technical Report</td></tr>
    <tr><td>VSE</td><td>Very Small Entity</td></tr>
  </tbody>
</table>`,
      },
      {
        id: "vse-characteristics",
        title: "5. VSE Characteristics and Potential Benefits",
        content: `<h4>5.1 General</h4>
<p>Very Small Entities (VSEs) around the world are creating valuable products and services. For the purposes of the ISO/IEC 29110 series of Standards, a Very Small Entity (VSE) is a company, organization, department, or project made up of no more than 25 people.</p>

<h4>5.2 VSE Characteristics</h4>
<p>According to the OECD's Outlook for Small and Medium Enterprises and Entrepreneurship report (2005), "Small and Medium Enterprises (SMEs) constitute the dominant sector of business organizations in all countries of the world, reaching figures between 95% and 99% of the total business population, depending on the country."</p>

<p>Many VSEs develop and/or maintain components of systems and software used in systems, either as standalone products or embedded in larger systems. Recognition of VSEs as high-quality software providers is therefore required.</p>

<h4>5.3 Potential Benefits for VSEs</h4>
<p>Studies and surveys have shown that most International Standards do not address the needs of VSEs. Implementation of and compliance with these standards is difficult, if not impossible. Consequently, VSEs do not have the means, or have very limited means, to be recognized as organizations that produce quality systems/system elements, including software in their domain.</p>

<p>A set of guidelines based on a series of VSE characteristics has been developed to address some of these difficulties. The guidelines are based on subsets of processes, activities, tasks, and appropriate results from the standards, called Profiles.</p>`,
        example:
          "A 10-person web development agency struggling to implement ISO/IEC/IEEE 12207 could instead adopt the ISO/IEC 29110 Basic Profile, which provides a more manageable subset of processes tailored to their size and capabilities.",
      },
      {
        id: "lifecycle-concepts",
        title: "6. Lifecycle Process Concepts",
        content: `<h4>6.1 General</h4>
<p>The ISO/IEC 29110 series can be applied to any phase of system or software development within a lifecycle. It is intended to be used with any lifecycle such as waterfall, iterative, incremental, evolutionary, or agile.</p>

<h4>6.2 System Concepts</h4>
<p>Systems, in the context of ISO/IEC 29110, are typically composed of hardware and software components.</p>

<h4>6.3 Lifecycle Models and Stages</h4>
<p>The lifecycle processes described in the ISO/IEC 29110 series can be used by a VSE when developing, acquiring, and using systems with hardware and software elements, as well as when creating and providing software elements. They can be applied at any level in a system development, in a software system structure, and at any stage of the lifecycle.</p>

<h4>6.4 Lifecycle Product Types</h4>
<p>The purpose of a profile is to define a subset of International Standards relevant to the context of VSEs, for example, processes, activities, tasks, and results from ISO/IEC/IEEE 12207 for software; processes, activities, tasks, and results from ISO/IEC/IEEE 15288 for systems; and information products (documents) from ISO/IEC/IEEE 15289 for software and systems.</p>`,
        example:
          "A VSE using Scrum methodology (agile) can still implement ISO/IEC 29110 profiles. The standard is lifecycle-agnostic and adapts to iterative sprints just as well as traditional waterfall phases.",
      },
      {
        id: "process-improvement",
        title: "7. Process Improvement and Assessment Concepts",
        content: `<h4>7.1 Process Improvement Concepts</h4>
<p>The ISO/IEC 29110 series has been developed to improve the quality of systems or software and/or services, and process performance.</p>

<h4>7.2 Process Capability Assessment Concepts</h4>
<p>VSEs can achieve recognition through the implementation of a profile and be audited according to the specifications of ISO/IEC 29110.</p>

<h4>7.3 Conformity Assessment</h4>
<p>ISO/IEC 29110-3 defines certification schemes, assessment guidelines, and compliance requirements for process capability assessment, conformity assessments, and self-assessments for process improvements.</p>`,
        example:
          "A VSE seeking to demonstrate process maturity to potential clients could undergo a conformity assessment against the ISO/IEC 29110 Basic Profile, receiving certification that validates their development practices.",
      },
      {
        id: "standardization-concepts",
        title: "8. Standardization Concepts",
        content: `<h4>8.1 General</h4>
<p>Understanding the standardization framework is essential for properly implementing ISO/IEC 29110.</p>

<h4>8.2 Standard</h4>
<p>An International Standard is a normative document developed through ISO/IEC processes.</p>

<h4>8.3 Guides</h4>
<p>Technical Reports provide guidance and explanatory information to help implement the standards.</p>

<h4>8.4 Profile</h4>
<p>A profile defines a subset of International Standards relevant to a specific context.</p>

<h4>8.5 Profile Group</h4>
<p>A profile group is a collection of related profiles organized by domain or capability level.</p>

<h4>8.6 Generic Profile Group</h4>
<p>Generic profile groups are applicable across multiple domains and provide a foundation for more specific implementations.</p>

<h4>8.7 Use of Profiles</h4>
<p>Profiles are designed to be incrementally adopted, allowing VSEs to start with basic requirements and progress to more advanced profiles as their capabilities mature.</p>

<h4>8.8 Profile Conformity</h4>
<p>Conformity with profiles can be assessed through formal audits or self-assessment methods.</p>`,
      },
      {
        id: "profile-taxonomy",
        title: "9. VSE Profile Taxonomy",
        content: `<h4>9.1 General</h4>
<p>The ISO/IEC 29110 series provides a taxonomy of profiles organized by domain and capability level.</p>

<h4>9.2 Profile Taxonomy</h4>
<p>Profiles are organized into groups based on their application domain (software engineering, systems engineering) and maturity level (Entry, Basic, Intermediate, Advanced).</p>

<h4>9.3 Generic Software Engineering Profile Group</h4>
<ul>
  <li><strong>9.3.1 General:</strong> Software engineering profiles address the development and maintenance of software products.</li>
  <li><strong>9.3.2 Entry Profile:</strong> For VSEs working on small, non-critical projects with minimal risk.</li>
  <li><strong>9.3.3 Basic Profile:</strong> For VSEs undertaking single-project software development with defined scope.</li>
  <li><strong>9.3.4 Intermediate Profile:</strong> For VSEs managing multiple projects or more complex development scenarios.</li>
  <li><strong>9.3.5 Advanced Profile:</strong> For VSEs seeking to sustain and grow as competitive software development businesses.</li>
</ul>

<h4>9.4 Generic Systems Engineering Profile Group</h4>
<ul>
  <li><strong>9.4.1 General:</strong> Systems engineering profiles address the development of systems with hardware and software components.</li>
  <li><strong>9.4.2 Entry Profile:</strong> For VSEs developing simple systems with limited complexity.</li>
  <li><strong>9.4.3 Basic Profile:</strong> For VSEs undertaking standard systems engineering projects.</li>
  <li><strong>9.4.4 Intermediate Profile:</strong> For VSEs managing multiple system projects.</li>
  <li><strong>9.4.5 Advanced Profile:</strong> For VSEs with mature systems engineering capabilities.</li>
</ul>

<h4>9.5 Organizational Management Profiles</h4>
<p>Profiles addressing organizational-level management and governance processes.</p>

<h4>9.6 Service Delivery Profiles</h4>
<p>Profiles addressing the delivery and management of IT services.</p>`,
        example:
          "A VSE that has successfully implemented the Basic Profile for two years and is now managing multiple concurrent projects should consider transitioning to the Intermediate Profile to address their evolved complexity.",
      },
      {
        id: "series-overview",
        title: "10. Overview of the ISO/IEC 29110 Series",
        content: `<h4>10.1 General</h4>
<p>The ISO/IEC 29110 series, aimed at a specific audience, has been developed to improve the quality of systems or software and/or services, and process performance.</p>

<h4>10.2 Specific Profile Documents</h4>
<ul>
  <li><strong>10.2.1 VSE Profiles:</strong> Tailored subsets of standards for VSE contexts.</li>
  <li><strong>10.2.2 Generic Profile:</strong> Broadly applicable profiles forming the foundation.</li>
  <li><strong>10.2.3 Profile Specifications:</strong> Detailed requirements for each profile (ISO/IEC 29110-4-m).</li>
  <li><strong>10.2.4 Management and Engineering Guides:</strong> Practical implementation guidance (ISO/IEC TR 29110-5-m-n).</li>
</ul>

<h4>10.3 Introductory Documents</h4>
<ul>
  <li><strong>10.3.1 Overview (Part 1):</strong> Introduction to concepts and terminology.</li>
  <li><strong>10.3.2 Framework (Part 2):</strong> Profile preparation framework and taxonomy.</li>
  <li><strong>10.3.3 Domain-Specific Profiles:</strong> Guidance for developing specialized profiles.</li>
</ul>

<h4>10.4 Certification and Assessment Guides</h4>
<ul>
  <li><strong>10.4.1 Guides:</strong> General assessment guidance (Part 3).</li>
  <li><strong>10.4.2 Certification Guide using Process Assessment:</strong> Requirements for formal certification.</li>
  <li><strong>10.4.3 Assessment Guide:</strong> Methods for conducting assessments.</li>
  <li><strong>10.4.4 Self-Improvement Framework:</strong> Autonomous improvement methods.</li>
</ul>

<h4>10.5 Specialized Guides</h4>
<p>Additional guidance documents for specific implementation scenarios.</p>`,
        example:
          "When starting with ISO/IEC 29110, a VSE should first read Part 1 (Overview), then consult Part 4-1 (Profile Specifications) to understand requirements, and finally use Part 5-1-2 (Basic Profile Guide) for practical implementation steps.",
      },
    ],
  },
  {
    id: "part-2",
    partNumber: "Part 2",
    title: "ISO/IEC 29110-2-1",
    subtitle: "Framework and Taxonomy",
    description:
      "Systems and Software Engineering — Lifecycle profiles for Very Small Entities (VSEs) — Part 2-1: Framework and Taxonomy",
    sections: [
      {
        id: "framework-scope",
        title: "1. Scope",
        content: `<p class="placeholder">This section will contain the scope and field of application for the Framework and Taxonomy document.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Purpose of the framework document</li>
  <li>Target audience (profile producers, tool vendors, methodology providers)</li>
  <li>Relationship to other parts of the standard</li>
</ul>`,
      },
      {
        id: "framework-concepts",
        title: "2. Profile Framework Concepts",
        content: `<p class="placeholder">This section will explain the conceptual framework for VSE profiles.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Profile structure and elements</li>
  <li>Relationship between profiles and base standards</li>
  <li>Profile adaptation mechanisms</li>
</ul>`,
      },
      {
        id: "taxonomy-structure",
        title: "3. Taxonomy Structure",
        content: `<p class="placeholder">This section will describe the taxonomy used to organize VSE profiles.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Classification criteria</li>
  <li>Profile categories</li>
  <li>Progression paths between profiles</li>
</ul>`,
      },
    ],
  },
  {
    id: "part-3",
    partNumber: "Part 3",
    title: "ISO/IEC 29110-3",
    subtitle: "Certification and Assessment Guide",
    description:
      "Systems and Software Engineering — Lifecycle profiles for Very Small Entities (VSEs) — Part 3: Certification and Assessment Guide",
    sections: [
      {
        id: "assessment-scope",
        title: "1. Scope",
        content: `<p class="placeholder">This section will define the scope of the certification and assessment guide.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Purpose of assessment and certification</li>
  <li>Types of assessments covered</li>
  <li>Target audience (auditors, certification bodies, VSEs)</li>
</ul>`,
      },
      {
        id: "certification-schemes",
        title: "2. Certification Schemes",
        content: `<p class="placeholder">This section will describe the certification schemes available for VSEs.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Certification requirements</li>
  <li>Certification process</li>
  <li>Certification bodies</li>
</ul>`,
      },
      {
        id: "assessment-methods",
        title: "3. Assessment Methods",
        content: `<p class="placeholder">This section will outline the assessment methods used for VSE profile conformity.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Self-assessment procedures</li>
  <li>Third-party assessment</li>
  <li>Assessment indicators and evidence</li>
</ul>`,
      },
      {
        id: "self-improvement",
        title: "4. Self-Improvement Framework",
        content: `<p class="placeholder">This section will describe the autonomous improvement framework.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Self-assessment tools</li>
  <li>Improvement planning</li>
  <li>Progress monitoring</li>
</ul>`,
      },
    ],
  },
  {
    id: "part-4-1",
    partNumber: "Part 4-1",
    title: "ISO/IEC 29110-4-1",
    subtitle: "Profile Specifications: Generic Profile Group",
    description:
      "Systems and Software Engineering — Lifecycle profiles for Very Small Entities (VSEs) — Part 4-1: Profile Specifications: Generic Profile Group",
    sections: [
      {
        id: "specifications-scope",
        title: "1. Scope",
        content: `<p class="placeholder">This section will define the scope of the profile specifications.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Purpose of profile specifications</li>
  <li>Relationship to base standards</li>
  <li>How to use profile specifications</li>
</ul>`,
      },
      {
        id: "entry-profile-spec",
        title: "2. Entry Profile Specification",
        content: `<p class="placeholder">This section will provide the detailed specification for the Entry Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Target VSE characteristics</li>
  <li>Required processes</li>
  <li>Expected outcomes</li>
</ul>`,
      },
      {
        id: "basic-profile-spec",
        title: "3. Basic Profile Specification",
        content: `<p class="placeholder">This section will provide the detailed specification for the Basic Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Target VSE characteristics</li>
  <li>Required processes (Project Management, Software Implementation)</li>
  <li>Expected outcomes and work products</li>
</ul>`,
      },
      {
        id: "intermediate-profile-spec",
        title: "4. Intermediate Profile Specification",
        content: `<p class="placeholder">This section will provide the detailed specification for the Intermediate Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Target VSE characteristics</li>
  <li>Additional processes beyond Basic</li>
  <li>Multi-project management requirements</li>
</ul>`,
      },
      {
        id: "advanced-profile-spec",
        title: "5. Advanced Profile Specification",
        content: `<p class="placeholder">This section will provide the detailed specification for the Advanced Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Target VSE characteristics</li>
  <li>Full process coverage</li>
  <li>Organizational maturity requirements</li>
</ul>`,
      },
    ],
  },
  {
    id: "part-5-1-1",
    partNumber: "Part 5-1-1",
    title: "ISO/IEC TR 29110-5-1-1",
    subtitle: "Management and Engineering Guide: Entry Profile",
    description:
      "Systems and Software Engineering — Lifecycle profiles for Very Small Entities (VSEs) — Part 5-1-1: Management and Engineering Guide: Generic Profile Group: Entry Profile",
    sections: [
      {
        id: "entry-guide-scope",
        title: "1. Scope",
        content: `<p class="placeholder">This section will define the scope of the Entry Profile management and engineering guide.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Purpose of the Entry Profile</li>
  <li>Target VSE characteristics</li>
  <li>When to use the Entry Profile</li>
</ul>`,
      },
      {
        id: "entry-processes",
        title: "2. Entry Profile Processes",
        content: `<p class="placeholder">This section will describe the processes included in the Entry Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Software Implementation process</li>
  <li>Activities and tasks</li>
  <li>Roles and responsibilities</li>
</ul>`,
      },
      {
        id: "entry-work-products",
        title: "3. Work Products",
        content: `<p class="placeholder">This section will describe the work products required by the Entry Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Required documentation</li>
  <li>Templates and examples</li>
  <li>Minimum content requirements</li>
</ul>`,
      },
      {
        id: "entry-deployment",
        title: "4. Deployment Guidelines",
        content: `<p class="placeholder">This section will provide practical deployment guidelines.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Implementation steps</li>
  <li>Common challenges</li>
  <li>Success factors</li>
</ul>`,
      },
    ],
  },
  {
    id: "part-5-1-2",
    partNumber: "Part 5-1-2",
    title: "ISO/IEC TR 29110-5-1-2",
    subtitle: "Management and Engineering Guide: Basic Profile",
    description:
      "Systems and Software Engineering — Lifecycle profiles for Very Small Entities (VSEs) — Part 5-1-2: Management and Engineering Guide: Generic Profile Group: Basic Profile",
    sections: [
      {
        id: "basic-guide-scope",
        title: "1. Scope",
        content: `<p class="placeholder">This section will define the scope of the Basic Profile management and engineering guide.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Purpose of the Basic Profile</li>
  <li>Target VSE characteristics</li>
  <li>Relationship to Entry Profile</li>
</ul>`,
      },
      {
        id: "project-management",
        title: "2. Project Management Process",
        content: `<p class="placeholder">This section will describe the Project Management process.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Project Planning activity</li>
  <li>Project Plan Execution activity</li>
  <li>Project Assessment and Control activity</li>
  <li>Project Closure activity</li>
</ul>`,
      },
      {
        id: "software-implementation",
        title: "3. Software Implementation Process",
        content: `<p class="placeholder">This section will describe the Software Implementation process.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Software Implementation Initiation activity</li>
  <li>Software Requirements Analysis activity</li>
  <li>Software Architecture and Detailed Design activity</li>
  <li>Software Construction activity</li>
  <li>Software Integration and Testing activity</li>
  <li>Product Delivery activity</li>
</ul>`,
      },
      {
        id: "basic-work-products",
        title: "4. Work Products",
        content: `<p class="placeholder">This section will describe the work products required by the Basic Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Project Plan</li>
  <li>Requirements Specification</li>
  <li>Software Design</li>
  <li>Test Cases and Test Report</li>
  <li>Product Operation Guide</li>
</ul>`,
      },
      {
        id: "basic-deployment",
        title: "5. Deployment Guidelines",
        content: `<p class="placeholder">This section will provide practical deployment guidelines for the Basic Profile.</p>
<p class="placeholder">Topics to cover:</p>
<ul>
  <li>Phased implementation approach</li>
  <li>Tool recommendations</li>
  <li>Training requirements</li>
  <li>Common pitfalls to avoid</li>
</ul>`,
      },
    ],
  },
]

export function getStandardById(id: string): StandardPart | undefined {
  return isoStandards.find((standard) => standard.id === id)
}

export function getAllStandardIds(): string[] {
  return isoStandards.map((standard) => standard.id)
}
