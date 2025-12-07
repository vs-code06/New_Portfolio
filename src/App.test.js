import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

// Mock scrollIntoView since it's not available in JSDOM
window.HTMLElement.prototype.scrollIntoView = function () { };

// Mock matchMedia
window.matchMedia = function (query) {
    return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    };
};

// Mock IntersectionObserver
window.IntersectionObserver = class IntersectionObserver {
    constructor() { }
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
};

// Mock ResizeObserver
window.ResizeObserver = class ResizeObserver {
    constructor() { }
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
};

test('renders header with logo', () => {
    render(
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
    const logoElement = screen.getByText(/<VIPUL \/>/i);
    expect(logoElement).toBeInTheDocument();
});

test('theme toggle changes class on html element', () => {
    render(
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );

    const toggleButton = screen.getByLabelText(/Toggle Theme/i);
    expect(toggleButton).toBeInTheDocument();

    // Initial state (assuming dark default or system pref, but we can check class)
    // Let's just click and verify change
    const initialTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';

    fireEvent.click(toggleButton);

    const newTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    expect(newTheme).not.toBe(initialTheme);
});
