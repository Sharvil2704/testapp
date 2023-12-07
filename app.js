// Sample ticket details (replace with actual data)
const sampleTicketDetails = {
    bus: "ABC Bus Company",
    seat: "12A",
    date: "November 30, 2023"
    // Add more ticket details as needed
};

function verifyTicket() {
    const inputField = document.getElementById('qr-input');
    const ticketDetailsSection = document.getElementById('ticket-details');
    const qrcodeSection = document.getElementById('qrcode');

    try {
        const scannedData = JSON.parse(inputField.value);

        // Validate scanned data (add more validation logic as needed)
        if (isValidTicket(scannedData)) {
            // Display ticket details and QR code
            displayTicketDetails(scannedData, qrcodeSection);
            ticketDetailsSection.classList.remove('hidden');
        } else {
            alert('Invalid ticket. Please try again.');
        }
    } catch (error) {
        alert('Invalid QR code. Please try again.');
    }
}

function isValidTicket(scannedData) {
    // Implement your validation logic here
    // For simplicity, this function always returns true in this example
    return true;
}

function displayTicketDetails(ticketDetails, qrcodeSection) {
    // Display ticket details (you can customize this based on your requirements)
    qrcodeSection.innerHTML = ''; // Clear previous content
    const qrcode = new QRCode(qrcodeSection, {
        text: JSON.stringify(ticketDetails),
        width: 128,
        height: 128
    });
}
