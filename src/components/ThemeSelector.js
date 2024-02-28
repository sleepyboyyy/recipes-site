import {useTheme} from "../API/useTheme";
import modeIcon from "../assets/mode-icon.svg"
//Stylesheet
import './ThemeSelector.css'


const themeColors = [ 'rebeccapurple', '#249c6b', '#b70233' ];
function ThemeSelector() {
    const { changeColor, mode, changeMode } = useTheme();
    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark');
    }
    console.log(mode)

    return (
        <div>
            <div className="theme-selector">
                <div className="mode-toggle">
                    <img
                        onClick={toggleMode}
                        src={modeIcon}
                        style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                        alt="dark/light toggle icon"
                    />
                </div>
                <div className="theme-buttons">
                    {themeColors.map(color => (
                        <div
                            key={color}
                            onClick={() => changeColor(color)}
                            style={{background: color}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThemeSelector;