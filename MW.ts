// List of Windows versions
const windowsVersions = ["Windows 95", "Windows 97", "Windows 98", "Windows 2000", "Windows Millennium", "Windows XP", "Windows 7", "Windows 8", "Windows 9", "Windows 10", "Windows 11"];

// Function to install Windows on a specified file system
function installWindows(version: string, fileSystem: string) {
    console.log(`Installing ${version} on ${fileSystem} file system...`);

    // Your installation code goes here
    // This is just a placeholder
    console.log(`${version} installed successfully on ${fileSystem} file system!`);
}

// Install each Windows version on FAT32 file system
windowsVersions.forEach(version => {
    installWindows(version, "FAT32");
});

// Install each Windows version on NTFS file system
windowsVersions.forEach(version => {
    installWindows(version, "NTFS");
});