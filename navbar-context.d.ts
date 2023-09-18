import * as framer_motion from 'framer-motion';
import * as _nextui_org_theme from '@nextui-org/theme';
import * as react from 'react';
import * as tailwind_variants from 'tailwind-variants';
import * as _nextui_org_system from '@nextui-org/system';

declare const NavbarProvider: react.Provider<{
    Component: _nextui_org_system.As<any>;
    slots: {
        base: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        menu: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        content: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        wrapper: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        item: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        toggle: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        srOnly: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        toggleIcon: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        brand: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        menuItem: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
    };
    domRef: react.RefObject<HTMLElement>;
    height: string | number;
    isHidden: boolean;
    disableAnimation: boolean;
    shouldHideOnScroll: boolean;
    isMenuOpen: boolean | undefined;
    classNames: _nextui_org_theme.SlotsToClasses<"base" | "menu" | "content" | "wrapper" | "item" | "toggle" | "srOnly" | "toggleIcon" | "brand" | "menuItem"> | undefined;
    setIsMenuOpen: (value: boolean | undefined, ...args: any[]) => void;
    motionProps: framer_motion.HTMLMotionProps<"nav"> | undefined;
    getBaseProps: _nextui_org_system.PropGetter<Record<string, unknown>, _nextui_org_system.DOMAttributes<_nextui_org_system.DOMElement>>;
    getWrapperProps: _nextui_org_system.PropGetter<Record<string, unknown>, _nextui_org_system.DOMAttributes<_nextui_org_system.DOMElement>>;
}>;
declare const useNavbarContext: () => {
    Component: _nextui_org_system.As<any>;
    slots: {
        base: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        menu: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        content: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        wrapper: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        item: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        toggle: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        srOnly: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        toggleIcon: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        brand: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
        menuItem: (slotProps?: ({
            maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | undefined;
            position?: "static" | "sticky" | undefined;
            isBordered?: boolean | undefined;
            isBlurred?: boolean | undefined;
            disableAnimation?: boolean | undefined;
            hideOnScroll?: boolean | undefined;
        } & tailwind_variants.ClassProp<tailwind_variants.ClassValue>) | undefined) => string;
    };
    domRef: react.RefObject<HTMLElement>;
    height: string | number;
    isHidden: boolean;
    disableAnimation: boolean;
    shouldHideOnScroll: boolean;
    isMenuOpen: boolean | undefined;
    classNames: _nextui_org_theme.SlotsToClasses<"base" | "menu" | "content" | "wrapper" | "item" | "toggle" | "srOnly" | "toggleIcon" | "brand" | "menuItem"> | undefined;
    setIsMenuOpen: (value: boolean | undefined, ...args: any[]) => void;
    motionProps: framer_motion.HTMLMotionProps<"nav"> | undefined;
    getBaseProps: _nextui_org_system.PropGetter<Record<string, unknown>, _nextui_org_system.DOMAttributes<_nextui_org_system.DOMElement>>;
    getWrapperProps: _nextui_org_system.PropGetter<Record<string, unknown>, _nextui_org_system.DOMAttributes<_nextui_org_system.DOMElement>>;
};

export { NavbarProvider, useNavbarContext };