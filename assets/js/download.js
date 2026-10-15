// Page where the game is hosted. Replace with the real itch.io URL.
const ITCH_URL = 'https://YOUR-ITCH-USERNAME.itch.io/underveil';

document.addEventListener('DOMContentLoaded', function() {
    const downloadArea = document.getElementById('download-area');
    downloadArea.innerHTML = `
        <div class="download-content">
            <h2>Ready to Download?</h2>
            <div class="download-cta">
                <a href="${ITCH_URL}" class="btn" target="_blank" rel="noopener">
                    <i class="fas fa-download"></i> Download on itch.io
                </a>
                <a href="#system-requirements" class="btn btn-outline">
                    <i class="fas fa-server"></i> Check Requirements
                </a>
            </div>
        </div>
    `;
});
