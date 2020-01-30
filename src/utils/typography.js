import Typography from 'typography'
import typographyTheme from 'typography-theme-doelger'

typographyTheme.overrideThemeStyles = () => ({
    'h1,h2,h3': {
        textTransform: 'uppercase',
    },
})

const typography = new Typography(typographyTheme)

export default typography