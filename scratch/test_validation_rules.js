// Form validation test runner
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const PINCODE_REGEX = /^[1-9]\d{5}$/;
const ALPHA_TEXT_REGEX = /^[A-Za-z\s.'-]+$/;

function validateField(fieldType, val, isRequired = true) {
  val = (val || '').trim();
  if (!val) {
    if (isRequired) return { valid: false, message: 'This field is required.' };
    return { valid: true, message: '' };
  }

  switch (fieldType) {
    case 'name':
      if (/\d/.test(val)) return { valid: false, message: 'Numbers are not allowed in name. Letters only.' };
      if (!ALPHA_TEXT_REGEX.test(val)) return { valid: false, message: 'Name must contain letters only.' };
      if (val.replace(/[^A-Za-z]/g, '').length < 3) return { valid: false, message: 'Name must have at least 3 letters.' };
      break;

    case 'phone':
      if (/[^0-9]/.test(val)) return { valid: false, message: 'Letters and symbols are not allowed. Numbers only.' };
      if (val.length !== 10) return { valid: false, message: `Phone must be exactly 10 digits (${val.length}/10 entered).` };
      if (!/^[6-9]/.test(val)) return { valid: false, message: 'Mobile number must start with 6, 7, 8, or 9.' };
      break;

    case 'email':
      if (!val.includes('@')) return { valid: false, message: "Email must include '@' symbol (e.g. name@domain.com)." };
      if (!EMAIL_REGEX.test(val)) return { valid: false, message: "Please enter a complete valid email (e.g. name@example.com)." };
      break;

    case 'city':
      if (/\d/.test(val)) return { valid: false, message: 'City cannot contain numbers. Letters only.' };
      if (!ALPHA_TEXT_REGEX.test(val)) return { valid: false, message: 'City must contain letters only.' };
      if (val.length < 2) return { valid: false, message: 'City must be at least 2 characters.' };
      break;

    case 'state':
      if (/\d/.test(val)) return { valid: false, message: 'State cannot contain numbers. Letters only.' };
      if (!ALPHA_TEXT_REGEX.test(val)) return { valid: false, message: 'State must contain letters only.' };
      if (val.length < 2) return { valid: false, message: 'State must be at least 2 characters.' };
      break;

    case 'pincode':
      if (/[^0-9]/.test(val)) return { valid: false, message: 'Letters are not allowed in PIN code. Numbers only.' };
      if (val.length !== 6) return { valid: false, message: `PIN code must be exactly 6 digits (${val.length}/6 entered).` };
      if (!PINCODE_REGEX.test(val)) return { valid: false, message: 'Please enter a valid 6-digit Indian PIN code.' };
      break;

    case 'address':
      if (val.length < 5) return { valid: false, message: 'Please enter a full address (at least 5 characters).' };
      break;
  }
  return { valid: true, message: '' };
}

const tests = [
  // Name
  { type: 'name', val: 'Jo123', expected: false, desc: 'Name with numbers' },
  { type: 'name', val: 'Al', expected: false, desc: 'Name under 3 letters' },
  { type: 'name', val: 'Karthik Raman', expected: true, desc: 'Valid full name' },
  { type: 'name', val: 'Dr. John Doe Jr.', expected: true, desc: 'Valid name with dot and spaces' },

  // Phone
  { type: 'phone', val: '98400abcde', expected: false, desc: 'Phone with letters' },
  { type: 'phone', val: '98400', expected: false, desc: 'Phone short' },
  { type: 'phone', val: '1234567890', expected: false, desc: 'Phone starting with 1' },
  { type: 'phone', val: '9840012345', expected: true, desc: 'Valid 10-digit phone' },

  // Email
  { type: 'email', val: 'karthikexample.com', expected: false, desc: 'Email missing @' },
  { type: 'email', val: 'karthik@', expected: false, desc: 'Email missing domain' },
  { type: 'email', val: 'karthik@example', expected: false, desc: 'Email missing TLD' },
  { type: 'email', val: 'karthik@example.com', expected: true, desc: 'Valid email' },

  // City & State
  { type: 'city', val: 'Chennai12', expected: false, desc: 'City with numbers' },
  { type: 'city', val: 'C', expected: false, desc: 'City 1 letter' },
  { type: 'city', val: 'Chennai', expected: true, desc: 'Valid city' },
  { type: 'state', val: 'Tamil Nadu 99', expected: false, desc: 'State with numbers' },
  { type: 'state', val: 'Tamil Nadu', expected: true, desc: 'Valid state' },

  // PIN Code
  { type: 'pincode', val: '600abc', expected: false, desc: 'PIN with letters' },
  { type: 'pincode', val: '60011', expected: false, desc: 'PIN 5 digits' },
  { type: 'pincode', val: '6001199', expected: false, desc: 'PIN 7 digits' },
  { type: 'pincode', val: '600119', expected: true, desc: 'Valid 6-digit PIN' },
];

let failed = 0;
tests.forEach(t => {
  const res = validateField(t.type, t.val);
  if (res.valid !== t.expected) {
    console.error(`❌ FAILED: [${t.type}] "${t.val}" (${t.desc}) -> Expected ${t.expected}, got ${res.valid} (${res.message})`);
    failed++;
  } else {
    console.log(`✅ PASSED: [${t.type}] "${t.val}" -> ${res.valid ? 'VALID' : 'BLOCKED: ' + res.message}`);
  }
});

console.log(`\nTest Result: ${tests.length - failed}/${tests.length} tests passed.`);
process.exit(failed > 0 ? 1 : 0);
