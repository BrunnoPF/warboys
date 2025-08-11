import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for common operations
export const fetchFilms = async () => {
  try {
    const { data, error } = await supabase
      .from('warboys_films')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    // Transform data to match expected format
    return data?.map(film => ({
      ...film,
      title: film.film_title, // Map film_title to title
      synopsis: film.info, // Map info to synopsis
      slug: film.film_title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') // Generate slug from title
    })) || []
  } catch (error) {
    console.error('Error fetching films:', error)
    return []
  }
}

export const fetchFilmById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('warboys_films')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    
    // Transform data to match expected format
    if (data) {
      return {
        ...data,
        title: data.film_title,
        synopsis: data.info,
        slug: data.film_title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching film:', error)
    return null
  }
}

export const fetchFilmBySlug = async (slug) => {
  try {
    // Since slug doesn't exist in your table, we'll search by generated slug from film_title
    const { data, error } = await supabase
      .from('warboys_films')
      .select('*')
    
    if (error) throw error
    
    // Find film by matching generated slug
    const film = data?.find(f => 
      f.film_title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
    )
    
    if (film) {
      return {
        ...film,
        title: film.film_title,
        synopsis: film.info,
        slug: film.film_title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching film by slug:', error)
    return null
  }
}

export const fetchCompanyInfo = async () => {
  try {
    const { data, error } = await supabase
      .from('company_info')
      .select('*')
      .single()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching company info:', error)
    return null
  }
}
