import { Menu } from '@headlessui/react'
import { useTheme } from '../../../../../../stores/app/hooks'
import { setTheme } from '../../../../../../stores/app/actions'
import { apperance, getApperanceIcon, getApperanceName, getLanguageName, languages } from '../../../../../../utils/consts/apperance'
import classNames from 'classnames'
import useColorScheme from '../../../../../../hooks/use-color-scheme'
import { useTranslation } from 'react-i18next'

function Apperance() {

    const theme = useTheme()
    const colorScheme = useColorScheme()

    const { t, i18n } = useTranslation()

    return (
        <div className='mt-auto grid gap-x-2 gap-y-1 grid-cols-2'>

            <Menu as='nav' className='relative'>
                <Menu.Button className='h-10 w-full rounded border text-zinc-600 border-zinc-300 bg-zinc-50 gap-x-2.5 font-medium flex items-center justify-center text-sm dark:bg-zinc-800 dark:text-white dark:border-zinc-700'>
                    <span className='text-black dark:text-white'>
                        {getApperanceIcon(theme, colorScheme)}
                    </span>
                    {t(getApperanceName(theme))}
                </Menu.Button>
                <Menu.Items className='absolute grid bottom-full left-0 w-[234px] bg-white border border-zinc-300 -translate-y-1 rounded dark:bg-zinc-800 dark:text-white dark:border-zinc-700'>
                    {apperance.map(({ key, value }, index) => (
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <button
                                    onClick={() => { setTheme(key) }}
                                    className={classNames('h-9 px-3 flex text-zinc-600 items-center gap-x-2.5 text-sm font-medium dark:text-white/80', {
                                        'bg-zinc-700 !text-white': active,
                                        'bg-blue-50 text-blue-600 dark:bg-primary dark:text-white': key === theme
                                    })}
                                    href="/account-settings"
                                >
                                    <span className={classNames({
                                        '!text-white': active,
                                        'text-black dark:text-white': !active,
                                        'text-blue-600 dark:text-white': key === theme
                                    })}>
                                        {getApperanceIcon(key)}
                                    </span>
                                    {t(value)}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
            <Menu as='nav' className='relative'>
                <Menu.Button className='h-10 w-full rounded border text-zinc-600 border-zinc-300 bg-zinc-50 gap-x-2.5 font-medium flex items-center justify-center text-sm dark:bg-zinc-800 dark:text-white dark:border-zinc-700'>
                    <img src={`/icons/${i18n.language}.svg`} className='w-5 h-5 rounded-full object-cover' alt={getLanguageName(i18n.language)} />
                    {i18n.language.toUpperCase()}
                </Menu.Button>
                <Menu.Items className='absolute grid bottom-full right-0 w-[234px] bg-white border border-zinc-300 -translate-y-1 rounded dark:bg-zinc-800 dark:text-white dark:border-zinc-700'>
                    {languages.map(({ key, value }, index) => (
                        <Menu.Item key={index}>
                            {({ active }) => (
                                <button
                                    onClick={() => { i18n.changeLanguage(key) }}
                                    className={classNames('h-9 px-3 flex text-zinc-600 items-center gap-x-2.5 text-sm font-medium dark:text-white/80', {
                                        'bg-zinc-700 !text-white': active,
                                        'bg-blue-50 text-blue-600 dark:bg-primary dark:text-white': key === i18n.language
                                    })}
                                    href="/account-settings"
                                >
                                    <img src={`/icons/${key}.svg`}  className='w-4 h-4 rounded-full object-cover' alt={getLanguageName(i18n.language)} />
                                    {value}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default Apperance