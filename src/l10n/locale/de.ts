// Deutsch

export default {
    //main.ts
    'Open HackerNews': 'Öffne Wörterbuch',
    'Open Language Switcher': 'Sprache wechseln',

    //_constants.ts
    'HackerNews': 'Wörterbuch',

    //customContextMenu.ts
    'Cut': 'Ausschneiden',
    'Copy': 'Kopieren',
    'Paste': 'Einfügen',
    'Show Synonyms': 'Zeige Synonyme',
    'Look up': 'Nachschlagen',

    //settingsTab.ts
    "Reset to default": "Zurücksetzen",
    'HackerNews Settings': 'Wörterbuch Einstellungen',
    'Refresh Interval': 'Refresh Interval',
    'The time interval in seconds after which the next top story will be fetched. Default and invalid values will be considered as 60 seconds.': 'The time interval in seconds after which the next top story will be fetched. Default and invalid values will be considered as 60 seconds.',
    'Language': 'Sprache',
    'The Language the Plugin will use to search for Definitions and Pronunciations.': 'Die Sprache, welche von dieser Erweiterung verwendet wird, um nach Definitionen zu suchen.',
    'Synonym Suggestions': 'Synonym Vorschläge',
    'Show synonyms for highlighted words': 'Zeige Synonyme für markierte Wörter',
    'Enabling this will allow the Plugin to analyze full sentences to better suggest synonyms based on the context.': 'Dies wird der Erweiterung erlauben ganze Sätze zu analysieren, um anschließend bessere Vorschläge für Synonyme basierend auf dem Kontext bereitzustellen.',
    'Click ': 'Klicke ',
    'here': 'hier',
    ' for Privacy Concerns.': ' bei Datenschutzbedenken',
    'Advanced Synonym Search': 'Erweiterte Synonym Suche',
    'Show Options in Context Menu': 'Zeige Optionen im Kontextmenü',
    'Enable custom Context Menu with options to search for synonyms (only if the auto suggestions are disabled) and to look up a full definition in the Sidebar. Warning: This will override Obsidian\'s default Context Menu.': 'Aktiviere das benutzerdefinierte Kontextmenü mit mehr Einstellungen, um Synoynme anzuzeigen (falls die automatischen Vorschläge deaktiviert sind) oder ein Wort nachzuschlagen.',
    'Click Here': 'Klicke hier',
    'Definition Provider': 'Definitionen Anbieter',
    'The API the Plugin will use to search for Definitions.': 'Die API die von der Erweiterung verwendet werden wird, um Definitionen zu suchen.',
    'Synonym Provider': 'Synonym Anbieter',
    'The API the Plugin will use to search for Synonyms.': 'Die API die von der Erweiterung verwendet werden wird, um Synonyme zu suchen.',
    'More Information': 'Mehr Informationen',
    'View Information about the API\'s and the Plugin itself.': 'Schau dir mehr Informationen über die APIs und die Erweiterung an.',
    'More Info': 'Mehr Infos',
    'Donate': 'Spenden',
    'If you found this plugin helpful, consider donating to support continued development.': 'Wenn du die Erweiterung hilfreich findest, kannst du hier etwas spenden um die weitere Entwicklung zu unterstützen:',
    'Local Dictionary Folder': 'Ordner für das Lokale Wörterbuch',
    'Specify a Folder, where all new Notes created by the Dictionary are placed. Please note that this Folder needs to already exist.': 'Gebe einen Ordner an, in dem alle vom Wörterbuch erstellten neuen Notizen abgelegt werden. Bitte beachte, dass dieser Ordner bereits vorhanden sein muss.',
    'Capitalize File Name': 'Dateinamen groß schreiben',
    'If you disable this, the names of newly created files will be all lowercase.': 'Wenn dies deaktiviert wird, werden die Namen neu erstellter Dateien nur in Kleinbuchstaben geschrieben.',
    'Filename Prefix and Suffix': 'Dateinamen-Präfix und -Suffix',
    'Here you can add a Prefix and Suffix for your newly created Files.': 'Hier kann ein ein Präfix und ein Suffix für neu erstellte Dateien hinzugefügt werden. Hier kann die {{lang}} Variable verwendet werden, um die momentane Sprache einzufügen.',
    "Prefix": "Prefix",
    "Suffix": "Suffix",
    'Here you can edit the Template for newly created Files.': 'Hier kann die Vorlage für neu erstellte Dateien angepasst werden.',
    'Click for a List of Variables': 'Klicke hier für eine Liste aller Variablen.',
    'Template': 'Vorlage',
    "Local-Dictionary-Builder Settings": "Einstellungen für den lokalen Wörterbuch-Builder",
    "Miscellaneous": "Sonstiges",
    "Caching Settings": "Zwischenspeicher Einstellungen",
    "Use Caching": "Nutze den Zwischenspeicher",
    "Enable or disable caching. Caching provides a semi-offline experience by saving every result for later use.": "Aktiviere oder deaktivere den Zwischenspeicher. Durch den Zwischenspeicher kannst du das Wörterbuch teilweise offline nutzen.",
    'Here you can delete all cached Data.': 'Hier kannst du alle zwischengespeicherten Daten löschen.',
    "You currently have ": "Momentan hast du ",
    " cached Definitions and ": " gespeicherte Definitionen und ",
    " cached Synonyms.": " gespeicherte Synonyme.",
    "Delete Cache": "Zwischenspeicher löschen",
    "Delete": "Löschen",
    "Success": "Erfolgreich gelöscht",
    'Use Language specific Subfolders': "Verwende untergeordnete Ordner für jede Sprache",
    'Create Subfolders for every language, e.g. "Dictionary/en-US/Cake"': "Verwende untergeordnete Ordner für jede Sprache, zum Beispiel \"Vokabeln/de/Kuchen\"",
    
    //localDictionaryBuilder.ts
    'Autogenerated by Obsidian Dictionary Plugin': 'Automatisch erstellt durch die Wörterbuch Erweiterung',
    "No, keep the old File.": "Nein, behalte die alte Datei",
    "Yes, overwrite the old File.": "Ja, überschreibe die alte Datei",
    "A existing File with the same Name was found, do you want to overwrite it?": "Eine bereits existierende Datei mit dem gleichen Namen wurde gefunden, möchtest du diese überschreiben?",
    "Meaning {{i}}": "Bedeutung {{i}}",

    //infoModal.svelte
    'API Information': 'API Informationen',
    'Definition API\'s': 'Definitionen APIs',
    'Website': 'Webseite',
    'Synonym API\'s': 'Synonym APIs',
    'Part of Speech API\'s': 'Wortart APIs',
    'This Plugin is using <a href="https://feathericons.com/">Feather Icons</a>': 'Diese Erweiterung verwendet <a href="https://feathericons.com/">Feather Icons</a>',

    //dictionaryView.svelte
    'Enter a word': 'Gebe ein Wort ein',
    'Pronunciation': 'Aussprache',
    'Meanings': 'Bedeutungen',
    "Origin": "Ursprung",
    'New Note': 'Neue Notiz',
    "View Error": "Fehler anzeigen",

    //errorComponent.ts
    'I can\'t find the word you are looking for or the server can\'t be reached. You can try again in a few minutes.': 'Ich kann das Wort nicht finden oder der Server kann nicht erreicht werden. Bitte probiere es in eingigen Minuten nocheinmal.',

    //meaningComponent.ts
    'Definition:': 'Definition:',
    'Synonyms:': 'Synonyme:',

    //modals
    "Choose a Definition Provider Service": "API für Definitionen auswählen",
    "Choose a Language": "Sprache auswählen",
    "Choose a Synonym Provider Service": "API für Synonyme auswählen",
};
