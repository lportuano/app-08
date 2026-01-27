import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient
(
    'https://mifzihtvrwgngbpgyoej.supabase.co', 
    'sb_publishable_ixEI5lxJ9Q4mr93zWvuzbg_i_KwwsEk'
)