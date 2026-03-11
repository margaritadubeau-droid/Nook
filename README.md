<h1 align="center">☕ The Nook Café Loyalty App</h1>

<p align="center">
  A retro-inspired digital loyalty system for small cafés, designed to replace physical punch cards with a simple QR-based rewards experience.
</p>

<p align="center">
  Customers collect stamps for coffee purchases, earn free drinks, and staff can manage rewards through a fast register-friendly interface.
</p>

<p align="center">
  <strong>Roles:</strong> Customer • Staff • Admin
</p>

<p align="center">
  <a href="https://margaritadubeau-droid.github.io/Nook/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Project-6f4e37?style=for-the-badge" alt="Live Demo Badge" />
  </a>
</p>

---

<h2>🌐 Live Demo</h2>

<p>
  <a href="https://margaritadubeau-droid.github.io/Nook/" target="_blank">
    https://margaritadubeau-droid.github.io/Nook/
  </a>
</p>

---

<h2>📸 Screenshots</h2>

<h3>Welcome Screen</h3>
<p>
  <img width="409" height="716" alt="Welcome Screen" src="https://github.com/user-attachments/assets/f202c993-d62f-4aff-9a96-1b0148c56a0f" />
</p>

<h3>Customer Rewards Card</h3>
<p>
  <img width="385" height="708" alt="Customer Rewards Card" src="https://github.com/user-attachments/assets/5724ca20-d2ae-43f9-a5cd-13adda54c7c8" />
</p>

<h3>Staff Interface</h3>
<p>
  <img width="398" height="704" alt="Staff Interface 1" src="https://github.com/user-attachments/assets/978da99c-08ac-4a4e-bc02-539ca3c27a20" />
  <img width="403" height="713" alt="Staff Interface 2" src="https://github.com/user-attachments/assets/8a45f791-f551-43e1-908e-1f04698e81c9" />
</p>

<h3>Admin Dashboard</h3>
<p>
  <img width="421" height="646" alt="Admin Dashboard 1" src="https://github.com/user-attachments/assets/e9c84b48-e62a-4c82-980e-53446f657185" />
  <img width="441" height="846" alt="Admin Dashboard 2" src="https://github.com/user-attachments/assets/49915476-4e7a-4ee1-b383-8e290348d2a0" />
</p>

---

<h2> Features</h2>

<h3>Customer Experience</h3>
<ul>
  <li>Create an account</li>
  <li>Sign in using a phone number</li>
  <li>View a personal QR loyalty card</li>
  <li>Track stamp progress</li>
  <li>See pending free coffee rewards</li>
  <li>View reward expiration dates</li>
  <li>View visit history</li>
  <li>Update account details</li>
</ul>

<h3>Rewards System</h3>
<ul>
  <li><strong>10 stamps → 1 free coffee</strong></li>
  <li><strong>Birthday month → 1 free coffee</strong></li>
  <li>Rewards expire after <strong>90 days</strong></li>
</ul>

<h3>Staff Interface</h3>
<p>Designed for fast use at the register.</p>
<ul>
  <li>Search customers by name or phone</li>
  <li>Scan QR codes</li>
  <li>Add stamps for purchases</li>
  <li>Redeem free coffees</li>
  <li>Grant birthday rewards</li>
  <li>Protected staff login with PIN</li>
</ul>

<h3>Admin Dashboard</h3>
<p>Admins can monitor loyalty activity and manage customers.</p>

<h4>Dashboard Analytics</h4>
<ul>
  <li>Total members</li>
  <li>Total visits</li>
  <li>Coffees redeemed</li>
  <li>Active rewards</li>
  <li>Average stamp progress</li>
</ul>

<h4>Redemption History</h4>
<ul>
  <li>View a log of all redeemed rewards</li>
</ul>

<h4>Customer Management</h4>
<ul>
  <li>View customer profiles</li>
  <li>Add or remove stamps</li>
  <li>Grant free rewards</li>
  <li>View visit history</li>
  <li>Protected admin login with separate PIN</li>
</ul>

---

<h2>⚙️ How It Works</h2>

<h3>Customer Flow</h3>
<p>
  Customer creates account <br />
  &#8595;<br />
  Customer receives a QR loyalty card <br />
  &#8595;<br />
  Staff scans QR code or searches by phone <br />
  &#8595;<br />
  Staff adds stamp <br />
  &#8595;<br />
  After 10 stamps, a free coffee reward is created <br />
  &#8595;<br />
  Staff redeems reward when used
</p>

<h3>Reward Expiration</h3>
<p>Each reward stores:</p>
<ul>
  <li>Earned date</li>
  <li>Expiration date</li>
  <li>Redeemed status</li>
</ul>

<p>Free coffee rewards expire <strong>90 days</strong> after being earned.</p>

---

<h2>🛠️ Tech Stack</h2>

<p><strong>Built using simple front-end technologies:</strong></p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Vanilla JavaScript</li>
</ul>

<p><strong>External libraries:</strong></p>
<ul>
  <li><code>html5-qrcode</code> – QR code scanner</li>
  <li><code>qrcode.js</code> – QR code generation</li>
</ul>

<p><strong>Data persistence:</strong></p>
<ul>
  <li><code>localStorage</code></li>
</ul>

<p>This allows the demo to function without a backend.</p>

---

<h2>🗂️ Project Structure</h2>

```bash
Nook/
│
├── index.html      # main application
├── style section   # UI styling
├── script section  # loyalty logic + UI behavior
│
└── assets/         # optional assets
