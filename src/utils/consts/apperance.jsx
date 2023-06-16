import { LuMoonStar } from 'react-icons/lu'
import { FiSun } from 'react-icons/fi'
import { CgScreen } from 'react-icons/cg'

export const apperance = [
    {
        key: 'default',
        value: 'apperance.default'
    },
    {
        key: 'dark',
        value: 'apperance.dark'
    },
    {
        key: 'light',
        value: 'apperance.light'
    }
]

export const getApperanceName = key => apperance.find(a => a.key === key)?.value

export const getApperanceIcon = (key, colorScheme = false) => {
    switch (key) {
        case 'default':
            if (!colorScheme) {
                return <CgScreen size={16} />
            } else {
                if (colorScheme === 'light') {
                    return <FiSun size={16} />
                } else {
                    return <LuMoonStar size={16} />
                }
            }
        case 'dark':
            return <LuMoonStar size={16} />
        case 'light':
            return <FiSun size={16} />
    }
}

export const languages = [
    {
        key: 'tr',
        value: 'Türkçe'
    },
    {
        key: 'en',
        value: 'English'
    },
    {
        key: 'az',
        value: 'Azerbaycan dili'
    }
]

export const getLanguageName = langCode => languages.find(l => l.key === langCode)?.value