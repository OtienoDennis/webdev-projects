import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://aexgddelpigljszsafli.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleGdkZGVscGlnbGpzenNhZmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0MDEyNjUsImV4cCI6MjA1Mjk3NzI2NX0.BIDdtrxQiBdKy5IIKW32NTNmlr3zYzd483SFaz9olSc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
