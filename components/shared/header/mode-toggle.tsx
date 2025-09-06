'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent } from '@/components/ui/dropdown-menu'
import { PiSun, PiMoon } from 'react-icons/pi'
import { LuSunMoon } from 'react-icons/lu'
import { useTheme } from 'next-themes'

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  return ( 
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
        >
          { theme === 'system' ? (
            <LuSunMoon />
          ) : theme === 'dark' ? (
            <PiMoon />
          ) : (
            <PiSun />
          )}
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
   )
}
 
export default ModeToggle