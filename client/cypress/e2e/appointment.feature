Feature: Randevu Sistemi

  Scenario: Hasta randevu alır ve listeler
    Given Kullanıcı giriş ekranındadır
    When "Hasta" adıyla giriş yapar
    And "Kardiyoloji" bölümünden randevu alır
    Then Randevularım listesinde "Kardiyoloji" görünmelidir
