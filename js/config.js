'use strict';
// ═══════════════════════════════════════════
// CONFIG — supabase client + app constants
// ═══════════════════════════════════════════

const EDGE     = 'https://ivqftezvshaywludmteu.supabase.co/functions/v1';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2cWZ0ZXp2c2hheXdsdWRtdGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNTQyMDQsImV4cCI6MjA4ODkzMDIwNH0.P7ZCHzhL6LVfb8BPg157T7Jw0YNSX3WLopM5UOTYj2w';
const SUPA_URL = 'https://ivqftezvshaywludmteu.supabase.co';

const sb = window.supabase.createClient(SUPA_URL, ANON_KEY);

const PHONE_RE   = /^[0-9]{10}$/;
const REWARD_EXP = 90;

// Supabase Auth helpers (used by staff/admin JWT flow)
async function signInWithEmail(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}
async function getCurrentUser() {
  const { data, error } = await sb.auth.getUser();
  if (error) throw error;
  return data.user;
}
async function getMyProfile() {
  const user = await getCurrentUser();
  if (!user) return null;
  const { data, error } = await sb
    .from('profiles')
    .select('id, email, full_name, role')
    .eq('id', user.id)
    .single();
  if (error) throw error;
  return data;
}
async function signOutAuthUser() {
  const { error } = await sb.auth.signOut();
  if (error) throw error;
}
