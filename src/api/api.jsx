export const getSchedule = async () => {
    const mockSchedule = [
        { id: 1, date: "2025-04-01", time: "10:00", group: "Група 101", teacher: "Іваненко" },
        { id: 2, date: "2025-04-02", time: "14:00", group: "Група 202", teacher: "Петренко" },
    ];
    return mockSchedule.data;
};