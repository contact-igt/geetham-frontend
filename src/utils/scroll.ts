export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Only intercept if it's an internal hash link
    if (targetId.startsWith("#") || targetId.startsWith("/#")) {
        // If we are on an inner page, let Next.js handle the hard navigation
        if (typeof window !== "undefined" && window.location.pathname !== "/") {
            return;
        }

        e.preventDefault();
        const id = targetId.replace("/#", "").replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }

        // Update URL quietly to keep history clean
        history.pushState(null, "", targetId);
    }
};
