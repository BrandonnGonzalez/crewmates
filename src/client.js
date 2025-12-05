// this file is where the Supabase client is created which connects the React app to the Supabase database

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://nsajlgvuctwgznknjazw.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zYWpsZ3Z1Y3R3Z3pua25qYXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4ODgxNTksImV4cCI6MjA4MDQ2NDE1OX0.H1sJk4dmAvSVL-T8rUWKsvgB1aEnYP9GFD1tLoCoqLQ";

//creates a new supabase client instance that allows the app to connect to the supabase database
export const supabase = createClient(supabaseUrl, API_KEY);


