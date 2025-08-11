import { useState, useEffect } from 'react'
import { fetchFilms, fetchCompanyInfo } from '../lib/supabase'

export const useFilms = () => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadFilms = async () => {
    try {
      setLoading(true)
      const data = await fetchFilms()
      setFilms(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      setFilms([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFilms()
  }, [])

  return { films, loading, error, refetch: loadFilms }
}

export const useCompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadCompanyInfo = async () => {
    try {
      setLoading(true)
      const data = await fetchCompanyInfo()
      setCompanyInfo(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      setCompanyInfo(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCompanyInfo()
  }, [])

  return { companyInfo, loading, error, refetch: loadCompanyInfo }
}
