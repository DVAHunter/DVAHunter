window.onload = function () {
    document.getElementById("main-content").innerHTML = `
        <section>
            <h2>Team Introduction</h2>
            <p>We are a group of researchers focused on studying DVA vulnerabilities.</p>
        </section>
        
        <section>
            <h2>Research Intent</h2>
            <p>Our goal is to conduct a systematic study of DVA vulnerabilities and evaluate their impact in the real world. To achieve this, we have designed DVAHunter and performed measurements on the Tranco Top 1M domains.</p>
        </section>
        
        <section>
            <h2>Ethical Considerations</h2>
            <p>We follow strict ethical guidelines in our measurements. Our scan rate is kept low to avoid any impact on CDNs and domain owners. We do not publicly disclose vulnerable domains, and we responsibly report any issues to the owners of vulnerable domains and CDN providers.</p>
        </section>
        
        <section>
            <h2>Contact Us</h2>
            <p>If you have any questions or do not wish us to scan your domain, please feel free to contact us at <a href="mailto:xx@gmail.com">xx@gmail.com</a>.</p>
        </section>
    `;
};
