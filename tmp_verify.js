import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nbftozygiuokmtneqdht.supabase.co';
const supabaseKey = 'sb_publishable_Iv2a0aiHAQzyUvTLfg8DVA_1JLdombS';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDb() {
  console.log("Connexion à Supabase...");
  const { data, error } = await supabase.from('contacts').select('*').limit(1);

  if (error) {
    console.error("Erreur lors de la requête :", error.message);
    process.exit(1);
  } else {
    console.log("Succès ! La base de données est accessible, et la table 'contacts' existe.");
    console.log("Data reçue (devrait être vide si RLS activé) :", data);
  }
}

checkDb();
