---
updatedAt: 2025-11-14T14:04:27Z
---
This issue tracks all the citeproc tests Hayagriva does support in principle (they have no unsupported features like date ranges) but which do not yet pass.

## Bugreports

- [ ] bugreports_AllCapsLeakage
- [ ] bugreports_ApostropheOnParticle
- [x] bugreports_BadDelimiterBeforeCollapse
  - Passes in #367 
- [ ] bugreports_ByBy
- [ ] bugreports_ChicagoAuthorDateLooping
- [ ] bugreports_CollapseFailure
- [ ] bugreports_ContainerTitleShort
- [ ] bugreports_DelimitersOnLocator
- [ ] bugreports_DisambiguationAddNames
- [ ] bugreports_DuplicateSpaces
- [ ] bugreports_DuplicateSpaces2
- [ ] bugreports_DuplicateSpaces3
- [ ] bugreports_DuplicateTerminalPunctuationInBibliography
  - Passes in #99
- [ ] bugreports_FrenchApostrophe
- [ ] bugreports_IeeePunctuation
- [ ] bugreports_LabelsOutOfPlace
- [ ] bugreports_LegislationCrash
- [ ] bugreports_MovePunctuationInsideQuotesForLocator
- [ ] bugreports_NoTitle
- [ ] bugreports_SingleQuote
- [ ] bugreports_SortSecondaryKey
- [ ] bugreports_SortedIeeeItalicsFail
- [ ] bugreports_ThesisUniversityAppearsTwice
- [ ] bugreports_UndefinedBeforeVal
- [ ] bugreports_UndefinedInName
- [ ] bugreports_YearSuffixInHarvard1
- [ ] bugreports_disambigHang
- [ ] bugreports_parenthesis
- [ ] bugreports_parseName

## Collapse

- [ ] collapse_AuthorCollapseNoDateSorted
- [ ] collapse_ChicagoAfterCollapse
- [ ] collapse_YearSuffixCollapse
- [x] collapse_YearSuffixCollapseNoRange
  - Passes in #367 
- [ ] collapse_YearSuffixCollapseNoYearSuffixDelimiter
- [ ] collapse_YearSuffixImplicitCollapseNoYearSuffixDelimiter

## Date

- [x] date_DateBC
  - Diverging behavior, replaced by local test case. See https://github.com/typst/hayagriva/issues/327#issuecomment-2986240675
- [ ] date_DateNoDateNoTest
  - citeproc emits error; Hayagriva an empty output
- [x] date_DayOrdinalDayOneOnly
  - Fixed in #366
- [ ] date_InPress
  -  We don't support literals in date
- [x] date_LopsidedDataYearSuffixCollapse
  - Passes in #367 
- [x] date_NegativeDateSort
  - Diverging behavior, replaced by local test case in #368. See https://github.com/typst/hayagriva/issues/327#issuecomment-2986240675
- [x] date_NegativeDateSortViaMacro
  - Diverging behavior, replaced by local test case in #368. See https://github.com/typst/hayagriva/issues/327#issuecomment-2986240675
- [x] date_NegativeDateSortViaMacroOnYearMonthOnly
  - Diverging behavior, replaced by local test case in #368. See https://github.com/typst/hayagriva/issues/327#issuecomment-2986240675
- [x] date_NonexistentSortReverseBibliography
  - Passes in #390
- [x] date_NonexistentSortReverseCitation
  - Passes in #390
- [x] date_OtherWithDate
  - Passes in #391
- [x] date_SeasonSubstituteInGroup
  - Passes in #391
- [x] date_SortEmptyDatesBibliography
  - Passes in #390
- [x] date_SortEmptyDatesCitation
  - Passes in #390
- [ ] date_String
  - We don't support `raw` in dates.
- [ ] date_Uncertain
  - Passes in #396
- [ ] date_VariousInvalidDates
  - *Very strange*: We accept some dates we shouldn't (e.g., w/ negative month); but citeproc treats a month > 12 as a season: The season is the month - 12. I don't know why
- [x] date_YearSuffixDelimiter
  - Passes in #367 
- [ ] date_YearSuffixImplicitWithNoDate
  - I do not understand why this should be disambiguated. The references are not identical.
- [ ] date_YearSuffixWithNoDate
  - Same as date_YearSuffixImplicitWithNoDate

## Decorations

- [ ] decorations_Baseline
  - Essentially same output but with additional `<sup>` tags. Overwrite the test or get rid of additional tags?
- [ ] decorations_NestedQuotes
  - Hayagriva does not recognize `‘` as quotation mark characters. Could be handled once #99 is merged.

## Disambiguate

- [ ] disambiguate_AddNamesFailure
  - Passes in #413 
- [ ] disambiguate_AddNamesFailureWithAddGivenname
  - Passes in #413 
- [ ] disambiguate_AllNamesBaseNameCountOnFailureIfYearSuffixAvailable
- [ ] disambiguate_AllNamesGenerally
- [ ] disambiguate_AllNamesSimpleSequence
- [x] disambiguate_AllNamesWithInitialsBibliography
  - Passes in #313
- [ ] disambiguate_AllNamesWithInitialsGenerally
- [ ] disambiguate_AndreaEg1a
  - Passes in #413 
- [ ] disambiguate_AndreaEg1b
- [ ] disambiguate_AndreaEg1c
  - Passes in #413 
- [ ] disambiguate_AndreaEg2
- [ ] disambiguate_AndreaEg3
- [ ] disambiguate_AndreaEg4
- [ ] disambiguate_AndreaEg5
- [ ] disambiguate_ByCiteBaseNameCountOnFailureIfYearSuffixAvailable
  - Passes in #413 
- [ ] disambiguate_ByCiteGivennameExpandCrossNestedNames
- [ ] disambiguate_ByCiteIncremental1
  - Passes in #413 
- [ ] disambiguate_ByCiteIncremental2
- [ ] disambiguate_ByCiteMinimalGivennameExpandMinimalNames
  - Passes in #413 
- [ ] disambiguate_ByCiteRetainNamesOnFailureIfYearSuffixNotAvailable
  - Passes in #413 
- [ ] disambiguate_CitationLabelDefault
- [ ] disambiguate_CitationLabelInData
- [ ] disambiguate_DisambiguateTrueReflectedInBibliography
- [ ] disambiguate_ExtraTextCitation
- [ ] disambiguate_IncrementalExtraText
- [ ] disambiguate_InitializeWithButNoDisambiguation
- [ ] disambiguate_PrimaryNameGenerally
- [ ] disambiguate_PrimaryNameWithInitialsLimitedToPrimary
- [ ] disambiguate_PrimaryNameWithParticle
- [ ] disambiguate_SkipAccessedYearSuffix
- [ ] disambiguate_ToInitialOnly
- [ ] disambiguate_Trigraph
- [ ] disambiguate_YearSuffixAndSort
- [ ] disambiguate_YearSuffixAtTwoLevels
- [x] disambiguate_YearSuffixMixedDates
  - Passes in #367 
- [x] disambiguate_YearSuffixTwoPairsBibliography
  - Passes in #313
- [x] disambiguate_YearSuffixTwoPairsFirstNameBibliography
  - Passes in #313 
- [x] disambiguate_YearSuffixTwoPairsFullNamesBibliography
  - Passes in #313
- [ ] disambiguate_YearSuffixWithMixedCreatorTypes
  - Passes in #413 

## Display

- [ ] display_AuthorAsHeading
- [ ] display_LostSuffix
- [ ] display_SecondFieldAlignClone

## Etal

- [x] etal_UseZeroFirst
  - Passes in #415 

## Flip Flop

- [ ] flipflop_Apostrophes
- [ ] flipflop_LeadingSingleQuote
- [ ] flipflop_QuotesInFieldNotOnNode
- [ ] flipflop_QuotesNodeLevelMarkup
  - Passes in #99
- [ ] flipflop_SingleBeforeColon
- [ ] flipflop_StartingApostrophe
- [ ] fullstyles_ChicagoArticleTitleQuestion
- [ ] fullstyles_ChicagoAuthorDateSimple

## Group

- [x] group_ComplexNesting
  - Passes in #400 
- [ ] group_SuppressTermInMacro
  - Passes in #419 
- [ ] group_SuppressTermWhenNoOutputFromPartialDate

## Label

- [ ] label_CollapsedPageNumberPluralDetection
- [ ] label_PluralWithAnd
- [ ] label_PluralWithCommaAnd
- [ ] label_PluralWithCommaLocalizedAnd
- [ ] label_PluralWithLocalizedAmpersand
- [ ] label_PluralWithLocalizedAnd

## Locator

- [ ] locator_SingularEmbeddedLabelAfterPlural
- [ ] locator_TrickyEntryForPlurals

## Magic

- [ ] magic_CapitalizeFirstOccurringNameParticle
- [ ] magic_CapitalizeFirstOccurringTerm
- [ ] magic_CitationLabelInBibliography
- [ ] magic_CitationLabelInCitation
- [ ] magic_ImplicitYearSuffixExplicitDelimiter
- [ ] magic_NameSuffixNoComma
- [ ] magic_NameSuffixWithComma
- [ ] magic_PunctuationInQuoteNested
- [ ] magic_PunctuationInQuoteTrueSuppressExtra
- [ ] magic_StripPeriodsTrueShortForm
- [ ] magic_SubsequentAuthorSubstitute
- [ ] magic_SubsequentAuthorSubstituteNotFooled
- [ ] magic_SubsequentAuthorSubstituteNotFooled
  - Passes in #228 
- [ ] magic_SuperscriptChars
- [ ] magic_SuppressLayoutDelimiterIfPrefixComma
- [ ] magic_TermCapitalizationWithPrefix

## Name

- [ ] name_ApostropheInGivenName
  - Passes in #99
- [ ] name_ArticularWithComma
  - Passes in #420
- [x] name_AuthorCount
  - Passes in #421
- [x] name_AuthorCountWithMultipleVariables
  - Passes in #421
- [x] name_AuthorEditorCount
  - Passes in #421
- [ ] name_CeltsAndToffsCrowdedInitials
  - Passes in #422 
- [ ] name_CeltsAndToffsSpacedInitials
  - Passes in #422
- [x] name_CiteGroupDelimiterWithYearSuffixCollapse
  - Passes in #423
- [ ] name_CiteGroupDelimiterWithYearSuffixCollapse2
- [x] name_CiteGroupDelimiterWithYearSuffixCollapse3
  - Passes in #423
- [ ] name_DelimiterAfterInverted
- [ ] name_EtAlWithCombined
- [ ] name_HebrewAnd
- [ ] name_HyphenatedNonDroppingParticle1
- [ ] name_HyphenatedNonDroppingParticle2
- [ ] name_InTextMarkupInitialize
- [ ] name_InTextMarkupNormalizeInitials
- [ ] name_InitialsInitializeFalse
- [ ] name_InitialsInitializeFalseEmpty
- [ ] name_InitialsInitializeFalsePeriod
- [ ] name_InitialsInitializeFalsePeriodSpace
- [ ] name_InitialsInitializeTrue
- [ ] name_InitialsInitializeTrueEmpty
- [ ] name_InitialsInitializeTruePeriod
- [ ] name_InitialsInitializeTruePeriodSpace
- [ ] name_LongAbbreviation
- [ ] name_LowercaseSurnameSuffix
- [ ] name_OnlyGivenname
- [ ] name_ParseNames
- [ ] name_ParsedCommaDelimitedDroppingParticleSortOrderingWithoutAffixes
  - Passes in #99
- [ ] name_ParsedDroppingParticleWithApostrophe
- [ ] name_ParticleCaps1
- [ ] name_ParticleCaps2
- [ ] name_ParticleCaps3
- [ ] name_ParticleParse1
- [ ] name_SplitInitials
- [ ] name_SubsequentAuthorSubstituteMultipleNames
  - Passes in #228 
- [ ] name_SubsequentAuthorSubstituteSingleField
  - Passes in #228 
- [ ] name_SubstituteOnNamesSpanGroupSpanFail
- [ ] name_SubstitutePartialEach
  - Passes in #228 
- [ ] name_TwoRolesSameRenderingSeparateRoleLabels
- [ ] name_namepartAffixes

## Nameattr

- [ ] nameattr_NamesDelimiterOnBibliographyInBibliography
- [ ] nameattr_NamesDelimiterOnCitationInCitation
- [ ] nameattr_NamesDelimiterOnStyleInBibliography
- [ ] nameattr_NamesDelimiterOnStyleInCitation

## Number

- [ ] number_LeadingZeros
- [ ] number_MixedText
- [ ] number_PlainHyphenOrEnDashAlwaysPlural

## Page

- [ ] page_ChicagoWeird
- [ ] page_Expand
- [ ] page_ExpandWeirdComposite
- [ ] page_Minimal
- [ ] page_NoOption

## Plural

- [ ] plural_NameLabelAlways
- [ ] plural_NameLabelContextualPlural
- [ ] plural_NameLabelContextualSingular
- [ ] plural_NameLabelDefaultPlural
- [ ] plural_NameLabelDefaultSingular
- [ ] plural_NameLabelNever

## Position

- [ ] position_FalseInBibliography
  - Passes in #425 

## Punctuation

- [x] punctuation_DefaultYearSuffixDelimiter
  - Passes in #367 
- [ ] punctuation_FrenchOrthography
- [ ] punctuation_FullMontyField
- [ ] punctuation_FullMontyPlain
- [ ] punctuation_FullMontyQuotesIn
- [ ] punctuation_FullMontyQuotesOut
- [ ] punctuation_OnMacro

## Quotes

- [ ] quotes_PunctuationWithInnerQuote
- [ ] quotes_QuotesUnderQuotesFalse

## Simplespace

- [ ] simplespace_case1

## Sort

- [x] sort_AguStyle
  - Passes in #313
- [ ] sort_AguStyleReverseGroups
  - Passes in #426
- [ ] sort_ChangeInNameSort
- [ ] sort_ChicagoYearSuffix1
  - Passes in #228 
- [ ] sort_ChicagoYearSuffix2
- [ ] sort_ConditionalMacroDates
  - Passes in #314 
- [ ] sort_DropNameLabelInSort
- [ ] sort_LeadingA
- [ ] sort_LeadingApostropheOnNameParticle
- [x] sort_NameImplicitSortOrderAndForm
  - Passes in #313
- [ ] sort_NameVariable
- [x] sort_NumberOfAuthorsAsKey
  - Passes in #313
- [ ] sort_OmittedBibRefMixedNumericStyle
- [ ] sort_OmittedBibRefNonNumericStyle
- [ ] sort_Quotes
- [ ] sort_SeparateAuthorsAndOthers
- [x] sort_StatusFieldAscending
  - Passes in #390
- [ ] sort_SubstituteTitle
  - Passes in #99
- [ ] sort_VariousNameMacros1
- [ ] sort_VariousNameMacros2
- [ ] sort_VariousNameMacros3

## Substitute

- [ ] substitute_SharedMacro
- [ ] substitute_SubstituteOnlyOnceTermEmpty

## Textcase

- [ ] textcase_InQuotes
- [ ] textcase_LastChar
- [ ] textcase_NoSpaceBeforeApostrophe
  - Passes in #99
- [ ] textcase_NonEnglishChars
- [ ] textcase_RepeatedTitleBug
- [ ] textcase_SkipNameParticlesInTitleCase
- [ ] textcase_TitleCaseWithCleverBrandName
- [ ] textcase_TitleWithEmDash

## Variables
- [ ] variables_ContainerTitleShort
