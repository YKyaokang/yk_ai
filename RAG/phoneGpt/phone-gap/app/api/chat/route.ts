import {
  embed,
  streamText
} from 'ai'
import {
  createOpenAI
} from "@ai-sdk/openai";
import {
  createClient
} from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? "",
)

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
})

async function generateEmbedding(message: string): Promise<any> {
  const { embedding } = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: message,
  })
  return embedding;
}

async function fetchRelevantContext(embedding: number[]) {
  const { data, error} = await supabase.rpc("get_relevant_chunks",{
    
  })
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages.at(-1).content;
    // embedding 
    const { embedding } = await generateEmbedding(latestMessage);
    console.log(embedding,'-----embedding');
    // console.log(embedding);
    // 相似度计算
    const context = await fetchRelevantContext(embedding);
    
  }catch(err) {

  }
}