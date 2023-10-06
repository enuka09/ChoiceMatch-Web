import React from 'react';

const CompetitionGuidelines = () => {
  return (
      <div className="accordion guideline-section">
          <div className="accordion-item border">
              <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Competition Guideline
                  </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="accordion-body">
                      <ol>
                          <li><b>Eligibility :</b></li>
                          <ul>
                              <li>The competition is open to individuals aged 18 and above. </li>
                              <li>Employees and immediate family members of the organizing company are not eligible to participate. </li>
                          </ul><br/>
                          <li><b>Submission Requirements :</b></li>
                          <ul>
                              <li>Participants must submit their original outfit that has not been published elsewhere.</li>
                              <li>Each participant is allowed a maximum of one entry.</li>
                              <li>Submissions should be in JPEG or PNG format, with a minimum resolution of 1080x1080 pixels.</li>
                          </ul><br/>
                          <li><b>Theme Adherence :</b></li>
                          <ul>
                              <li>Entries should strictly adhere to the competition theme. Any deviation may result in disqualification.</li>
                          </ul><br/>
                          <li><b>Judging Criteria :</b></li>
                          <ul>
                              <li>Creativity and originality (40%)</li>
                              <li>Relevance to the theme (30%)</li>
                              <li>Overall aesthetic appeal (20%)</li>
                          </ul><br/>
                          <li><b>Prizes :</b></li>
                          <ul>
                              <li>Winners will be awarded as per the prize structure announced.</li>
                              <li>Prizes are non-transferable and cannot be exchanged for cash.</li>
                          </ul><br/>
                          <li><b>Disqualification :</b></li>
                          <ul>
                              <li>The organizing company reserves the right to disqualify any participant found violating the competition rules or engaging in any form of misconduct.</li>
                          </ul><br/><br/>
                          <p><b>Contact</b></p>
                          <p>For any queries or clarifications, participants can reach out to <a href="#">competition@gmail.com.</a></p>

                      </ol>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default CompetitionGuidelines;
