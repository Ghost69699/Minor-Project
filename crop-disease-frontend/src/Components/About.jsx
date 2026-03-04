import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Understanding Plant Diseases</h1>
          <p>Learn how to identify, prevent, and treat common crop diseases</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-container">
        {/* What are Plant Diseases */}
        <section className="about-section">
          <div className="section-header">
            <h2>What are Plant Diseases?</h2>
            <span className="section-icon">🦠</span>
          </div>
          <p>
            Plant diseases are disorders caused by pathogens such as fungi, bacteria, viruses, and nematodes. 
            These organisms attack plant tissues, disrupting their normal functions and causing visible symptoms 
            like leaf spots, wilting, discoloration, and necrosis. Understanding these diseases is crucial for 
            maintaining healthy crops and ensuring food security.
          </p>
        </section>

        {/* Types of Diseases */}
        <section className="about-section">
          <div className="section-header">
            <h2>Types of Plant Diseases</h2>
            <span className="section-icon">📚</span>
          </div>
          
          <div className="disease-types">
            <div className="disease-type">
              <h3>Fungal Diseases</h3>
              <p>
                Caused by fungi, these are the most common plant diseases. Examples include powdery mildew, 
                leaf rust, and early blight. Fungi spread through spores and thrive in warm, humid conditions.
              </p>
            </div>

            <div className="disease-type">
              <h3>Bacterial Diseases</h3>
              <p>
                Caused by bacteria, these diseases can severely damage plants. Examples include bacterial wilt, 
                bacterial leaf spots, and crown gall. They typically spread through water and insects.
              </p>
            </div>

            <div className="disease-type">
              <h3>Viral Diseases</h3>
              <p>
                Viruses cause mosaic patterns, yellowing, and deformation of leaves. They spread primarily through 
                insect vectors like aphids and whiteflies. Viral infections are often difficult to treat.
              </p>
            </div>

            <div className="disease-type">
              <h3>Pest Damage</h3>
              <p>
                Various insects and mites can cause visible damage to plants. These include spider mites, 
                aphids, caterpillars, and beetles that feed on leaves and stems.
              </p>
            </div>
          </div>
        </section>

        {/* Disease Symptoms */}
        <section className="about-section">
          <div className="section-header">
            <h2>Common Disease Symptoms</h2>
            <span className="section-icon">🔍</span>
          </div>
          
          <div className="symptoms-grid">
            <div className="symptom-card">
              <div className="symptom-icon">🍂</div>
              <h3>Leaf Spots</h3>
              <p>Brown, yellow, or black spots appearing on leaves, often with concentric rings or halos</p>
            </div>

            <div className="symptom-card">
              <div className="symptom-icon">🌱</div>
              <h3>Wilting</h3>
              <p>Drooping or sagging of leaves and stems despite adequate water supply</p>
            </div>

            <div className="symptom-card">
              <div className="symptom-icon">💛</div>
              <h3>Yellowing</h3>
              <p>Chlorosis or yellowing of leaves, starting from veins or margins</p>
            </div>

            <div className="symptom-card">
              <div className="symptom-icon">🧂</div>
              <h3>Powdery Coating</h3>
              <p>White or grayish powder on leaves and stems (powdery mildew)</p>
            </div>

            <div className="symptom-card">
              <div className="symptom-icon">🌪️</div>
              <h3>Deformation</h3>
              <p>Twisted, curled, or abnormally shaped leaves and stems</p>
            </div>

            <div className="symptom-card">
              <div className="symptom-icon">🖤</div>
              <h3>Necrosis</h3>
              <p>Death of plant tissue resulting in brown or black patches</p>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="about-section">
          <div className="section-header">
            <h2>Disease Prevention Tips</h2>
            <span className="section-icon">🛡️</span>
          </div>
          
          <div className="prevention-tips">
            <div className="tip">
              <span className="tip-number">1</span>
              <div>
                <h3>Practice Crop Rotation</h3>
                <p>Rotate crops annually to break disease cycles and reduce soil-borne pathogens</p>
              </div>
            </div>

            <div className="tip">
              <span className="tip-number">2</span>
              <div>
                <h3>Maintain Proper Spacing</h3>
                <p>Ensure adequate spacing between plants for better air circulation and reduced humidity</p>
              </div>
            </div>

            <div className="tip">
              <span className="tip-number">3</span>
              <div>
                <h3>Use Disease-Resistant Varieties</h3>
                <p>Select plant varieties that are naturally resistant to common diseases in your region</p>
              </div>
            </div>

            <div className="tip">
              <span className="tip-number">4</span>
              <div>
                <h3>Water Properly</h3>
                <p>Water at the base of plants early in the morning to keep foliage dry</p>
              </div>
            </div>

            <div className="tip">
              <span className="tip-number">5</span>
              <div>
                <h3>Remove Infected Material</h3>
                <p>Promptly remove and destroy infected leaves, stems, and plants to prevent spread</p>
              </div>
            </div>

            <div className="tip">
              <span className="tip-number">6</span>
              <div>
                <h3>Keep Tools Clean</h3>
                <p>Sterilize pruning tools and equipment to avoid spreading diseases between plants</p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Methods */}
        <section className="about-section">
          <div className="section-header">
            <h2>Treatment Methods</h2>
            <span className="section-icon">💊</span>
          </div>
          
          <div className="treatment-methods">
            <div className="method">
              <h3>Organic Solutions</h3>
              <ul>
                <li>Neem oil spray for fungal and pest issues</li>
                <li>Sulfur dust for powdery mildew</li>
                <li>Copper fungicide for bacterial diseases</li>
                <li>Compost tea for beneficial microorganisms</li>
              </ul>
            </div>

            <div className="method">
              <h3>Chemical Solutions</h3>
              <ul>
                <li>Systemic fungicides for internal infections</li>
                <li>Bactericides for bacterial diseases</li>
                <li>Insecticides for pest management</li>
                <li>Growth regulators for plant vigor</li>
              </ul>
            </div>

            <div className="method">
              <h3>Cultural Practices</h3>
              <ul>
                <li>Pruning infected branches carefully</li>
                <li>Improving soil drainage</li>
                <li>Mulching to prevent soil splash</li>
                <li>Companion planting strategies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* When to Use CropDiagnosis */}
        <section className="about-section diagnosis-section">
          <div className="section-header">
            <h2>When to Use CropDiagnosis</h2>
            <span className="section-icon">📱</span>
          </div>
          <p>
            CropDiagnosis uses advanced AI technology to help you quickly and accurately identify plant diseases 
            from images. Use our tool when you notice any unusual symptoms on your plants and need immediate 
            diagnosis and treatment recommendations. Upload a clear image of the affected plant part, and our 
            system will analyze it and provide:
          </p>
          <ul className="diagnosis-features">
            <li>✓ Accurate disease identification</li>
            <li>✓ Confidence scores for each diagnosis</li>
            <li>✓ Detailed treatment recommendations</li>
            <li>✓ Prevention tips for future reference</li>
            <li>✓ Access to plant care guides</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
