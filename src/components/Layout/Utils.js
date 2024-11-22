import {NavLi} from "@/components";
import {redirect} from "next/navigation";

export default class Utils {
    static renderMenuList = (list) => {
        return list.map(({href, label, icon}) => (
            <NavLi key={href} href={href} icon={icon}>
                {label}
            </NavLi>
        ))
    }
    static getDocumentTitle = (title = 'Home') => `SIAKAD | ${title}`;
    static redirectLogin = () => redirect(`${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`);
    /**
     * Translate nested value that using '.' for delimiter
     * @param obj
     * @param path
     * @returns {*}
     */
    static resolveNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    };

    static thousandth(value, delimiter = ".") {
        let retVal = value.toString().replace(/\D/g, '');//from /[^\d]/g
        while (/(\d+)(\d{3})/.test(retVal)) {
            retVal = retVal.replace(/(\d+)(\d{3})/, '$1' + delimiter + '$2');
        }
        return retVal;
    }

    static initCountUpAnimation(target, onCountUp, countUpTo, duration = 2000, timeout = 10) {
        /**
         * Animation count up only occurred when visible to the client
         * @type {IntersectionObserver}
         */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // console.log('count up entry', entry)
                if (entry.isIntersecting) {
                    // console.log('start animation count up')
                    Utils.countUpAnimation(onCountUp, 0, countUpTo, duration, timeout);
                    // Once the animation is started, stop observing
                    observer.unobserve(entry.target);
                }
            });
        });

        // Observe each element
        observer.observe(target);
    }

    static countUpAnimation(onCountUp, start, end, duration = 2000, timeout = 10) {
        // Calculate the increment
        const increment = (end - start) / (duration / timeout);

        let currentValue = start;

        const timer = setInterval(function () {
            currentValue += increment;

            // If we've reached or exceeded the end value, stop the timer and set the value to end
            if (increment > 0 && currentValue >= end) {
                clearInterval(timer);
                currentValue = end;
            } else if (increment < 0 && currentValue <= end) {
                clearInterval(timer);
                currentValue = end;
            }

            // Update the element with the current value
            if (typeof onCountUp === 'function')
                onCountUp(Math.floor(currentValue));
        }, timeout);
    }

    static fixFloatingPoint(value, fractionDigits = 2) {
        const round = 10 ** fractionDigits;
        return Math.round(value * round) / round
    }
}