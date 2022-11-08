import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import "devices.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


const theme = {
    ...LightTheme,
    mediaQuery: {
        small: `@media screen and (min-width: ${LightTheme.breakpoints.small}px)`,
        medium: `@media screen and (min-width: ${LightTheme.breakpoints.medium}px)`,
        large: `@media screen and (min-width: ${LightTheme.breakpoints.large}px)`,
        maxSmall: `@media screen and (max-width: ${LightTheme.breakpoints.medium - 1
            }px)`,
        maxMedium: `@media screen and (max-width: ${LightTheme.breakpoints.large - 1
            }px)`
    }
};

const engine = new Styletron();

root.render(
    <BrowserRouter>
        <StyletronProvider value={engine}>
            <BaseProvider theme={theme}>
                <App />
            </BaseProvider>
        </StyletronProvider>
    </BrowserRouter>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
