import { Flex } from 'components/Box'
import { Text } from 'components/Text'
import { LogoImage, MainContainer } from './styles'
import { Link } from 'react-router-dom'
import useTheme from 'components/hooks/useTheme'

const Comingsoon = () => {
    const { theme } = useTheme();
    return (
        <MainContainer>
            <Flex alignItems={'center'} flexDirection={'column'}>
                <Link to="/">
                    <LogoImage
                        src={
                            "../assets/images/Brandlockup.svg"
                        }
                        alt={"logo"}
                    />
                </Link>
                <Flex flexDirection={'row'} alignItems={'center'} mt={'30px'}>
                    <Text fontSize='24px' fontFamily={theme.fonts.primary} ml={'10px'} >
                        Coming Soon!
                    </Text>
                </Flex>
                <Flex width={'300px'}>
                    <Text mt={'30px'} fontSize='16px' fontFamily={theme.fonts.primary} textAlign={'center'}>
                        We're hard at work to bring you the best mobile experience to your phone. Until then, please switch to desktop to start using our application.
                    </Text>
                </Flex>
            </Flex>
        </MainContainer>
    )
}

export default Comingsoon